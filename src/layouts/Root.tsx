import { Outlet } from "react-router-dom";
import { RootWrapper } from "@/components/common/RootWrapper";

export const RootLayout = () => (
  <RootWrapper>
    <Outlet />
  </RootWrapper>
);
