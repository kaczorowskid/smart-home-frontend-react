import { Outlet } from "react-router-dom";

export const Error = () => (
  <div className="w-full h-[100vh] flex place-items-center justify-center">
    <Outlet />
  </div>
);
