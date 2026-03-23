import { useUserStore } from "@/stores/user";
import { renderHook } from "@testing-library/react";
import { it, expect, describe, beforeEach } from "vitest";
import { usePermissions } from "../usePermissions.hook";

const setPermissions = (permissions: string[]) => {
  useUserStore.setState({
    role: {
      id: "role-1",
      name: "TestRole",
      permissions: permissions.map((p) => ({
        id: p,
        roleId: "role-1",
        permission: p as "IS_ADMIN",
      })),
    },
  });
};

describe("usePermissions", () => {
  beforeEach(() => {
    useUserStore.setState({
      role: { id: "", name: "", permissions: [] },
    });
  });

  it("returns true when user has the required permission", () => {
    setPermissions(["IS_ADMIN"]);

    const { result } = renderHook(() => usePermissions(["IS_ADMIN"]));

    expect(result.current).toBe(true);
  });

  it("returns false when user does not have the required permission", () => {
    setPermissions(["IS_ADMIN"]);

    const { result } = renderHook(() => usePermissions(["DASHBOARD_VIEW"]));

    expect(result.current).toBe(false);
  });

  it("returns true when user has at least one of required permissions (some logic)", () => {
    setPermissions(["IS_ADMIN", "DASHBOARD_VIEW"]);

    const { result } = renderHook(() =>
      usePermissions(["GRAPHS_VIEW", "DASHBOARD_VIEW"])
    );

    expect(result.current).toBe(true);
  });

  it("returns false when user has no permissions", () => {
    setPermissions([]);

    const { result } = renderHook(() => usePermissions(["IS_ADMIN"]));

    expect(result.current).toBe(false);
  });

  it("returns false when required permissions array is empty", () => {
    setPermissions(["IS_ADMIN"]);

    const { result } = renderHook(() => usePermissions([]));

    expect(result.current).toBe(false);
  });
});
