import { Navigation } from "@/components/Navigation/Navigation";
import { ViewBar } from "@/components/ViewBar/ViewBar";
import { Outlet } from "react-router-dom";

export const PrivateLayout = () => (
  <div>
    <Navigation />
    <div className="w-full pl-[300px] p-5">
      <ViewBar />
      <Outlet />
    </div>
  </div>
);
