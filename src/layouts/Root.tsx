import { RootWrapper } from "@/components/common/RootWrapper";
import { Outlet } from "react-router-dom";

export const RootLayout = () => (
  <RootWrapper>
    <Outlet />
  </RootWrapper>
);
