import { it, expect, describe, beforeEach } from "vitest";
import { useUserStore } from "../userStore";

describe("userStore", () => {
  beforeEach(() => {
    useUserStore.setState({
      id: "",
      name: "",
      email: "",
      surname: "",
      isVerified: false,
      isLoggedIn: false,
      role: { id: "", name: "", permissions: [] },
    });
  });

  it("has correct initial state", () => {
    const state = useUserStore.getState();

    expect(state.id).toBe("");
    expect(state.name).toBe("");
    expect(state.email).toBe("");
    expect(state.surname).toBe("");
    expect(state.isVerified).toBe(false);
    expect(state.isLoggedIn).toBe(false);
    expect(state.role).toEqual({ id: "", name: "", permissions: [] });
  });

  it("updates all fields with setUser", () => {
    const userData = {
      id: "user-1",
      name: "John",
      surname: "Doe",
      isVerified: true,
      isLoggedIn: true,
      email: "john@example.com",
      role: {
        id: "role-1",
        name: "Admin",
        permissions: [{ id: "p1", roleId: "role-1", permission: "IS_ADMIN" as const }],
      },
    };

    useUserStore.getState().setUser(userData);

    const state = useUserStore.getState();
    expect(state.id).toBe("user-1");
    expect(state.name).toBe("John");
    expect(state.email).toBe("john@example.com");
    expect(state.surname).toBe("Doe");
    expect(state.isVerified).toBe(true);
    expect(state.isLoggedIn).toBe(true);
    expect(state.role.name).toBe("Admin");
    expect(state.role.permissions).toHaveLength(1);
    expect(state.role.permissions[0].permission).toBe("IS_ADMIN");
  });

  it("overwrites previous state on second setUser call", () => {
    useUserStore.getState().setUser({
      id: "user-1",
      name: "John",
      surname: "Doe",
      isVerified: true,
      isLoggedIn: true,
      email: "john@example.com",
      role: { id: "r1", name: "Admin", permissions: [] },
    });

    useUserStore.getState().setUser({
      id: "user-2",
      name: "Jane",
      surname: "Smith",
      isVerified: false,
      isLoggedIn: false,
      email: "jane@example.com",
      role: { id: "r2", name: "User", permissions: [] },
    });

    const state = useUserStore.getState();
    expect(state.id).toBe("user-2");
    expect(state.name).toBe("Jane");
    expect(state.isLoggedIn).toBe(false);
  });
});
