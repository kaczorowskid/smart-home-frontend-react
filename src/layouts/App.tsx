import { Navigation } from "@/components/app/Navigation";
import { PrivateWrapper } from "@/components/app/PrivateWrapper";
import { ViewBar } from "@/components/app/ViewBar";
import { Outlet } from "react-router-dom";

export const AppLayout = () => (
  <PrivateWrapper>
    <Navigation />
    <div className="w-full pl-[300px] p-5">
      <ViewBar />
      <Outlet />
    </div>
  </PrivateWrapper>
);
