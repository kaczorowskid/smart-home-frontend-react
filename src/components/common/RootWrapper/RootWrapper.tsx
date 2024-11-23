import { useEffect } from "react";
import { useUserStore } from "@/stores/user";
import { useAuthorizeUser } from "@/api/hooks/auth.hooks";
import { RootWrapperProps } from "./RootWrapper.types";
import { Loader2 } from "lucide-react";

export const RootWrapper = ({ children }: RootWrapperProps) => {
  const { data, error, isLoading } = useAuthorizeUser();
  const { setUser } = useUserStore();
  const { getInitialState } = useUserStore;

  useEffect(() => {
    if (error) {
      setUser(getInitialState());
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

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Loader2 className="h-20 w-20 animate-spin" />
      </div>
    );
  }

  return children;
};
