import { axiosInstance } from "@/lib/axios";
import { useUserStore } from "@/stores/user";
import { useAuthorizeUser } from "@/api/hooks/auth.hooks";
import { useRef, useEffect, useLayoutEffect } from "react";
import { refreshUserAccessToken } from "@/api/handlers/auth.handlers";

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
  const retry = useRef(false);

  useLayoutEffect(() => {
    const refreshInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !retry.current) {
          retry.current = true;

          try {
            await refreshUserAccessToken();
            retry.current = false;

            return axiosInstance(originalRequest);
          } catch (err) {
            console.log("err ", err);
            retry.current = false;
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
