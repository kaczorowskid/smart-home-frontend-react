import { AppLayout } from "@/layouts/App";
import { Rooms } from "@/views/app/Rooms";
import { Login } from "@/views/auth/Login";
import { Graphs } from "@/views/app/Graphs";
import { AuthLayout } from "@/layouts/Auth";
import { Start } from "@/views/start/Start";
import { RootLayout } from "@/layouts/Root";
import { Options } from "@/views/app/Options";
import { ErrorLayout } from "@/layouts/Error";
import { Settings } from "@/views/app/Settings";
import { Register } from "@/views/auth/Register";
import { Dashboard } from "@/views/app/Dashboard";
import { Error404 } from "@/views/error/Error404";
import { RoomDetails } from "@/views/app/RoomDetails";
import { PrivateRoute } from "@/components/common/PrivateRoute";
import {
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { routesPath } from "./routesPath";

export const Routes = (): JSX.Element => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout />}>
          <Route
            path={routesPath.base}
            element={
              <PrivateRoute
                isUserNotLoggedInElement={<Start />}
                isUserLoggedInElement={
                  <Navigate to={routesPath.app.dashboard} />
                }
              />
            }
          />
          <Route element={<AuthLayout />}>
            <Route
              path={routesPath.auth.login}
              element={
                <PrivateRoute
                  isUserNotLoggedInElement={<Login />}
                  isUserLoggedInElement={
                    <Navigate to={routesPath.app.dashboard} />
                  }
                />
              }
            />
            <Route
              path={routesPath.auth.register}
              element={
                <PrivateRoute
                  isUserNotLoggedInElement={<Register />}
                  isUserLoggedInElement={
                    <Navigate to={routesPath.app.dashboard} />
                  }
                />
              }
            />
          </Route>
          <Route element={<AppLayout />}>
            <Route
              path={routesPath.app.dashboard}
              element={
                <PrivateRoute
                  isUserLoggedInElement={<Dashboard />}
                  isUserNotLoggedInElement={
                    <Navigate to={routesPath.auth.login} />
                  }
                />
              }
            />
            <Route
              path={routesPath.app.graphs}
              element={
                <PrivateRoute
                  isUserLoggedInElement={<Graphs />}
                  isUserNotLoggedInElement={
                    <Navigate to={routesPath.auth.login} />
                  }
                />
              }
            />
            <Route
              path={routesPath.app.rooms}
              element={
                <PrivateRoute
                  isUserLoggedInElement={<Rooms />}
                  isUserNotLoggedInElement={
                    <Navigate to={routesPath.auth.login} />
                  }
                />
              }
            />
            <Route
              path={routesPath.app.roomsDetails}
              element={
                <PrivateRoute
                  isUserLoggedInElement={<RoomDetails />}
                  isUserNotLoggedInElement={
                    <Navigate to={routesPath.auth.login} />
                  }
                />
              }
            />
            <Route
              path={routesPath.app.options}
              element={
                <PrivateRoute
                  isUserLoggedInElement={<Options />}
                  isUserNotLoggedInElement={
                    <Navigate to={routesPath.auth.login} />
                  }
                />
              }
            />
            <Route
              path={routesPath.app.settings}
              element={
                <PrivateRoute
                  isUserLoggedInElement={<Settings />}
                  isUserNotLoggedInElement={
                    <Navigate to={routesPath.auth.login} />
                  }
                />
              }
            />
          </Route>
        </Route>
        <Route element={<ErrorLayout />}>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
