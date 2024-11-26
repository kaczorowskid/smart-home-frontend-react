import { Outlet } from "react-router-dom";

export const ErrorLayout = () => (
  <div className="w-full h-screen flex place-items-center justify-center">
    <Outlet />
  </div>
);
