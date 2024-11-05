import { Navigation } from "@/components/app/Navigation";
import { PrivateWrapper } from "@/components/app/PrivateWrapper";
import { Outlet } from "react-router-dom";

export const AppLayout = () => (
  <PrivateWrapper>
    <Navigation />
    <div className="w-full p-5 lg:pl-[300px]">
      <Outlet />
    </div>
  </PrivateWrapper>
);
