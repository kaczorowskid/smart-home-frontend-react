import { it, expect, describe } from "vitest";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "@/tests/customRender/customRender";
import { PrivateRoute } from "./PrivateRoute";

describe("PrivateRoute", () => {
  it("renders logged-in element when user is logged in", () => {
    renderWithProviders(
      <PrivateRoute
        isUserNotLoggedInElement={<div>Login</div>}
        isUserLoggedInElement={<div>Dashboard</div>}
      />,
      { initialState: { isLoggedIn: true } }
    );

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.queryByText("Login")).not.toBeInTheDocument();
  });

  it("renders not-logged-in element when user is not logged in", () => {
    renderWithProviders(
      <PrivateRoute
        isUserNotLoggedInElement={<div>Login</div>}
        isUserLoggedInElement={<div>Dashboard</div>}
      />,
      { initialState: { isLoggedIn: false } }
    );

    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.queryByText("Dashboard")).not.toBeInTheDocument();
  });
});
