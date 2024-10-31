import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { routesPath } from "./routesPath";
import { AppLayout } from "@/layouts/App";
import { Dashboard } from "@/views/app/Dashboard";
import { Options } from "@/views/app/Options";
import { ErrorLayout } from "@/layouts/Error";
import { Error404 } from "@/views/error/Error404";
import { Graphs } from "@/views/app/Graphs";
import { AuthLayout } from "@/layouts/Auth";
import { Login } from "@/views/auth/Login";
import { Register } from "@/views/auth/Register";
import { Rooms } from "@/views/app/Rooms";
import { RoomDetails } from "@/views/app/RoomDetails";

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
          <Route path={routesPath.app.rooms} element={<Rooms />} />
          <Route path={routesPath.app.roomsDetails} element={<RoomDetails />} />
          <Route path={routesPath.app.options} element={<Options />} />
        </Route>
        <Route element={<ErrorLayout />}>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
