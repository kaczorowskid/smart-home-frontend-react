import { Outlet } from "react-router-dom";
import { Navigation } from "@/components/app/Navigation";

export const AppLayout = () => (
  <>
    <Navigation />
    <div className="w-full p-5 lg:pl-[300px]">
      <Outlet />
    </div>
  </>
);
