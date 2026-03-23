import { it, expect, describe } from "vitest";
import { schema } from "../form.schemas";

describe("form schemas", () => {
  describe("email", () => {
    it("accepts valid email", () => {
      expect(schema.email.safeParse("user@example.com").success).toBe(true);
    });

    it("rejects invalid email", () => {
      expect(schema.email.safeParse("not-an-email").success).toBe(false);
    });

    it("rejects empty string", () => {
      expect(schema.email.safeParse("").success).toBe(false);
    });
  });

  describe("roleId", () => {
    it("accepts valid UUID", () => {
      expect(
        schema.roleId.safeParse("550e8400-e29b-41d4-a716-446655440000")
          .success
      ).toBe(true);
    });

    it("rejects non-UUID string", () => {
      expect(schema.roleId.safeParse("not-a-uuid").success).toBe(false);
    });
  });

  describe("name", () => {
    it("accepts string with 3 characters", () => {
      expect(schema.name.safeParse("abc").success).toBe(true);
    });

    it("accepts string with 50 characters", () => {
      expect(schema.name.safeParse("a".repeat(50)).success).toBe(true);
    });

    it("rejects string with 2 characters", () => {
      expect(schema.name.safeParse("ab").success).toBe(false);
    });

    it("rejects string with 51 characters", () => {
      expect(schema.name.safeParse("a".repeat(51)).success).toBe(false);
    });
  });

  describe("password", () => {
    it("accepts string with 3 characters", () => {
      expect(schema.password.safeParse("abc").success).toBe(true);
    });

    it("rejects string with 2 characters", () => {
      expect(schema.password.safeParse("ab").success).toBe(false);
    });

    it("rejects string with 51 characters", () => {
      expect(schema.password.safeParse("a".repeat(51)).success).toBe(false);
    });
  });

  describe("deviceId", () => {
    it("accepts string with 1 character", () => {
      expect(schema.deviceId.safeParse("A").success).toBe(true);
    });

    it("accepts string with 3 characters", () => {
      expect(schema.deviceId.safeParse("A1B").success).toBe(true);
    });

    it("rejects empty string", () => {
      expect(schema.deviceId.safeParse("").success).toBe(false);
    });

    it("rejects string with 4 characters", () => {
      expect(schema.deviceId.safeParse("ABCD").success).toBe(false);
    });
  });

  describe("deviceTypes", () => {
    it("accepts THERMOMETER", () => {
      expect(schema.deviceTypes.safeParse("THERMOMETER").success).toBe(true);
    });

    it("accepts BLIND", () => {
      expect(schema.deviceTypes.safeParse("BLIND").success).toBe(true);
    });

    it("rejects unknown type", () => {
      expect(schema.deviceTypes.safeParse("UNKNOWN").success).toBe(false);
    });
  });

  describe("roomType", () => {
    const validRoomTypes = [
      "BACKYARD",
      "BATHROOM",
      "BEDROOM",
      "KITCHEN",
      "LIVINGROOM",
    ];

    it.each(validRoomTypes)("accepts %s", (roomType) => {
      expect(schema.roomType.safeParse(roomType).success).toBe(true);
    });

    it("rejects unknown room type", () => {
      expect(schema.roomType.safeParse("GARAGE").success).toBe(false);
    });
  });

  describe("permissions", () => {
    it("accepts valid permissions array", () => {
      expect(
        schema.permissions.safeParse(["IS_ADMIN", "DASHBOARD_VIEW"]).success
      ).toBe(true);
    });

    it("accepts empty array", () => {
      expect(schema.permissions.safeParse([]).success).toBe(true);
    });

    it("rejects array with unknown permission", () => {
      expect(
        schema.permissions.safeParse(["UNKNOWN_PERMISSION"]).success
      ).toBe(false);
    });

    it("accepts all defined permissions", () => {
      const allPermissions = [
        "IS_ADMIN",
        "DASHBOARD_VIEW",
        "GRAPHS_VIEW",
        "ROOMS_VIEW",
        "OPTIONS_VIEW",
        "OPTIONS_VIEW_DEVICES",
        "OPTIONS_ADD_DEVICE",
        "OPTIONS_UPDATE_DEVICE",
        "OPTIONS_DELETE_DEVICE",
        "OPTIONS_VIEW_ROOMS",
        "OPTIONS_ADD_ROOM",
        "OPTIONS_UPDATE_ROOM",
        "OPTIONS_DELETE_ROOM",
        "OPTIONS_VIEW_USERS",
        "OPTIONS_ADD_USER",
        "OPTIONS_UPDATE_USER",
        "OPTIONS_DELETE_USER",
        "OPTIONS_VIEW_ROLES",
        "OPTIONS_ADD_ROLE",
        "OPTIONS_UPDATE_ROLE",
        "OPTIONS_DELETE_ROLE",
        "SETTINGS_VIEW",
      ];
      expect(schema.permissions.safeParse(allPermissions).success).toBe(true);
    });
  });
});
