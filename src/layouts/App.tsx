import { Navigation } from "@/components/app/Navigation";
import { PrivateWrapper } from "@/components/app/PrivateWrapper";
import { Outlet } from "react-router-dom";

export const AppLayout = () => (
  <PrivateWrapper>
    <Navigation />
    <div className="w-full pl-[300px] p-5">
      <Outlet />
    </div>
  </PrivateWrapper>
);
