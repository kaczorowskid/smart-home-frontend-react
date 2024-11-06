import { Outlet } from "react-router-dom";
import SmartHome from "@/assets/smart-home.svg";

export const AuthLayout = () => {
  return (
    <div className="flex w-full h-[100vh]">
      <div className="flex items-center justify-center h-full w-full lg:w-1/2">
        <Outlet />
      </div>
      <div className="hidden justify-center items-center w-1/2 h-[100vh] bg-muted lg:flex">
        <img src={SmartHome} />
      </div>
    </div>
  );
};
