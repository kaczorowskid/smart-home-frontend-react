import { refreshUserAccessToken } from "@/api/handlers/auth.handlers";
import { useAuthorizeUser } from "@/api/hooks/auth.hooks";
import { axiosInstance } from "@/lib/axios";
import { routesPath } from "@/routes/routesPath";
import { useUserStore } from "@/stores/user";
import { useEffect, useLayoutEffect } from "react";

export const useCheckUserAuth = () => {
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

  return {
    isLoading,
  };
};

export const useRefreshAccessToken = () => {
  const appPaths = Object.values(routesPath.app);

  useLayoutEffect(() => {
    const refreshInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const orginalRequest = error.config;

        if (
          error.response.status === 401 &&
          appPaths.some((path) => window.location.pathname.includes(path))
        ) {
          try {
            await refreshUserAccessToken();

            return axiosInstance(orginalRequest);
          } catch (err) {
            console.log("err ", err);
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.response.eject(refreshInterceptor);
    };
  }, []);
};
