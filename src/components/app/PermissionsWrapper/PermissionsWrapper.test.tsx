import { it, expect, describe } from "vitest";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "@/tests/customRender/customRender";
import { PermissionsWrapper } from "./PermissionsWrapper";

describe("PermissionsWrapper", () => {
  it("renders children when user has matching permission", () => {
    renderWithProviders(
      <PermissionsWrapper permissions={["IS_ADMIN"]}>
        <div>Protected content</div>
      </PermissionsWrapper>
    );

    expect(screen.getByText("Protected content")).toBeInTheDocument();
  });

  it("does not render children when user lacks permission", () => {
    renderWithProviders(
      <PermissionsWrapper permissions={["IS_ADMIN"]}>
        <div>Protected content</div>
      </PermissionsWrapper>,
      {
        initialState: {
          role: { id: "r1", name: "User", permissions: [] },
        },
      }
    );

    expect(screen.queryByText("Protected content")).not.toBeInTheDocument();
  });

  it("does not render children when required permissions is empty", () => {
    renderWithProviders(
      <PermissionsWrapper permissions={[]}>
        <div>Protected content</div>
      </PermissionsWrapper>
    );

    expect(screen.queryByText("Protected content")).not.toBeInTheDocument();
  });
});
