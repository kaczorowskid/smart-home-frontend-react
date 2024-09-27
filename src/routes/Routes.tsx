import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { AppLayout } from "@/layouts/App";
import { Dashboard } from "@/views/app/Dashboard";
import { routesPath } from "./routesPath";
import { Devices } from "@/views/app/Devices";
import { Settings } from "@/views/app/Settings";
import { ErrorLayout } from "@/layouts/Error";
import { Error404 } from "@/views/error/Error404";
import { Graphs } from "@/views/app/Graphs";
import { AuthLayout } from "@/layouts/Auth";
import { Login } from "@/views/auth/Login";
import { Register } from "@/views/auth/Register";
import { Users } from "@/views/app/Users";

export const Routes = (): JSX.Element => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path={routesPath.base}
          element={<Navigate to={routesPath.app.dashboard} />}
        />
        <Route element={<AuthLayout />}>
          <Route path={routesPath.auth.login} element={<Login />} />
          <Route path={routesPath.auth.register} element={<Register />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path={routesPath.app.dashboard} element={<Dashboard />} />
          <Route path={routesPath.app.graphs} element={<Graphs />} />
          <Route path={routesPath.app.devices} element={<Devices />} />
          <Route path={routesPath.app.users} element={<Users />} />
          <Route path={routesPath.app.settings} element={<Settings />} />
        </Route>
        <Route element={<ErrorLayout />}>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
