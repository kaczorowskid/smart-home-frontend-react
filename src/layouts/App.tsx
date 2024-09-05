import { Navigation } from "@/components/Navigation";
import { PrivateWrapper } from "@/components/PrivateWrapper";
import { ViewBar } from "@/components/ViewBar";
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
