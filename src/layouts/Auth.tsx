import { Outlet } from "react-router-dom";
import SmartHome from "@/assets/smart-home.svg";

export const AuthLayout = () => {
  return (
    <div className="flex w-full h-[100vh]">
      <div className="flex items-center justify-center w-1/2 h-full">
        <Outlet />
      </div>
      <div className="flex justify-center items-center w-1/2 h-[100vh] bg-muted">
        <img src={SmartHome} />
      </div>
    </div>
  );
};
