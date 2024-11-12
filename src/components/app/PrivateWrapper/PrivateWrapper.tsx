import { useEffect } from "react";
import { PrivateWrapperProps } from "./PrivateWrapper.types";
import { useUserStore } from "@/stores/user";
import { useNavigate } from "react-router-dom";
import { routesPath } from "@/routes/routesPath";
import { useAuthorizeUser } from "@/api/hooks/auth.hooks";

export const PrivateWrapper = ({ children }: PrivateWrapperProps) => {
  const { setUser } = useUserStore();
  const navigate = useNavigate();
  const { data, error } = useAuthorizeUser();

  useEffect(() => {
    if (error) {
      navigate(routesPath.auth.login);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      setUser({
        ...data,
        isLoggedIn: true,
      });
    }
  }, [data]);

  return data ? children : null;
};
