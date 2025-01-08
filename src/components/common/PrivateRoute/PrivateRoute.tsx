import { useUserStore } from "@/stores/user";
import { type PrivateRouteProps } from "./PrivateRoute.types";

export const PrivateRoute = ({
  isUserLoggedInElement,
  isUserNotLoggedInElement,
}: PrivateRouteProps) => {
  const { isLoggedIn } = useUserStore();

  if (isLoggedIn) {
    return isUserLoggedInElement;
  } else {
    return isUserNotLoggedInElement;
  }
};
