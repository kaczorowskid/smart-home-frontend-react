import { renderWithProviders } from "@/tests/customRender/customRender";
import { ReactNode } from "react";
import { describe, expect, it } from "vitest";
import { AdminOnlyWrapper } from "./AdminOnlyWrapper";
import { screen } from "@testing-library/react";

describe("AdminOnlyWrapper", () => {
  const TestComponent = ({ children }: { children: ReactNode }) => (
    <div data-testid="admin-content">{children}</div>
  );

  it("renders children when role is ADMIN", () => {
    renderWithProviders(
      <AdminOnlyWrapper>
        <TestComponent>Admin Content</TestComponent>
      </AdminOnlyWrapper>,
      {
        initialState: { role: "ADMIN" },
      }
    );

    expect(screen.getByTestId("admin-content")).toBeInTheDocument();
  });

  it("does not render children when role is not ADMIN", () => {
    renderWithProviders(
      <AdminOnlyWrapper>
        <TestComponent>Admin Content</TestComponent>
      </AdminOnlyWrapper>,
      {
        initialState: { role: "USER" },
      }
    );

    expect(screen.queryByTestId("admin-content")).not.toBeInTheDocument();
  });
});
