import { Loader2 } from "lucide-react";
import { type RootWrapperProps } from "./RootWrapper.types";
import { useCheckUserAuth, useRefreshAccessToken } from "./RootWrapper.hooks";

export const RootWrapper = ({ children }: RootWrapperProps) => {
  const { isLoading } = useCheckUserAuth();
  useRefreshAccessToken();

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Loader2 className="h-20 w-20 animate-spin" />
      </div>
    );
  }

  return children;
};
