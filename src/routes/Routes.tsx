import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { PrivateLayout } from "@/layouts/Private";
import { Dashboard } from "@/views/app/Dashboard/Dashboard";
import { routesPath } from "./routesPath";
import { Devices } from "@/views/app/Devices/Devices";
import { Settings } from "@/views/app/Settings/Settings";
import { Error } from "@/layouts/Error";
import { Error404 } from "@/views/error/Error404/Error404";

export const Routes = (): JSX.Element => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path={routesPath.base}
          element={<Navigate to={routesPath.app.dashboard} />}
        />
        <Route element={<PrivateLayout />}>
          <Route path={routesPath.app.dashboard} element={<Dashboard />} />
          <Route path={routesPath.app.devices} element={<Devices />} />
          <Route path={routesPath.app.settings} element={<Settings />} />
        </Route>
        <Route element={<Error />}>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
