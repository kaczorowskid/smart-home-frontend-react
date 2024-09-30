import { useEffect } from "react";
import { useAuthorizeUser } from "./PrivateWrapper.hooks";
import { PrivateWrapperProps } from "./PrivateWrapper.types";
import { useUserStore } from "@/stores/user";
import { useNavigate } from "react-router-dom";
import { routesPath } from "@/routes/routesPath";

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
        id: data.id,
        email: data.email,
        name: data.name,
        surname: data.surname,
        role: data.role,
        isVerified: data.isVerified,
        isLoggedIn: true,
      });
    }
  }, [data]);

  return data ? children : null;
};
