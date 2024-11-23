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
import { Settings } from "@/views/app/Settings";
import { Start } from "@/views/start/Start";
import { PrivateRoute } from "@/components/common/PrivateRoute";
import { RootLayout } from "@/layouts/Root";

export const Routes = (): JSX.Element => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/start" element={<Start />} />
        <Route element={<RootLayout />}>
          <Route
            path={routesPath.base}
            element={
              <PrivateRoute
                isUserLoggedInElement={
                  <Navigate to={routesPath.app.dashboard} />
                }
                isUserNotLoggedInElement={<Start />}
              />
            }
          />
          <Route element={<AuthLayout />}>
            <Route
              path={routesPath.auth.login}
              element={
                <PrivateRoute
                  isUserLoggedInElement={
                    <Navigate to={routesPath.app.dashboard} />
                  }
                  isUserNotLoggedInElement={<Login />}
                />
              }
            />
            <Route
              path={routesPath.auth.register}
              element={
                <PrivateRoute
                  isUserLoggedInElement={
                    <Navigate to={routesPath.app.dashboard} />
                  }
                  isUserNotLoggedInElement={<Register />}
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
