import { it, expect, describe } from "vitest";
import { apiUrls } from "../apiUrls";

describe("apiUrls", () => {
  describe("room", () => {
    it("has correct base url", () => {
      expect(apiUrls.room.base).toBe("/room");
    });

    it("builds getRoom url with id", () => {
      expect(apiUrls.room.getRoom("123")).toBe("/room/123");
    });
  });

  describe("role", () => {
    it("has correct base url", () => {
      expect(apiUrls.role.base).toBe("/role");
    });

    it("has correct permissions url", () => {
      expect(apiUrls.role.permissions).toBe("/role/permission");
    });

    it("builds getRole url with id", () => {
      expect(apiUrls.role.getRole("r1")).toBe("/role/r1");
    });
  });

  describe("thermometerData", () => {
    it("has correct base url", () => {
      expect(apiUrls.thermometerData.base).toBe("/thermometer-data");
    });

    it("builds getOneSensor url with id", () => {
      expect(apiUrls.thermometerData.getOneSensor("s1")).toBe(
        "/thermometer-data/s1"
      );
    });
  });

  describe("auth", () => {
    it("has correct login url", () => {
      expect(apiUrls.auth.login).toBe("/auth/login");
    });

    it("has correct logout url", () => {
      expect(apiUrls.auth.logout).toBe("/auth/logout");
    });

    it("has correct refresh url", () => {
      expect(apiUrls.auth.refresh).toBe("/auth/refresh");
    });

    it("has correct register url", () => {
      expect(apiUrls.auth.register).toBe("/auth/register");
    });

    it("has correct authorize url", () => {
      expect(apiUrls.auth.authorize).toBe("/auth/authorize");
    });
  });

  describe("user", () => {
    it("has correct base url", () => {
      expect(apiUrls.user.base).toBe("/user");
    });

    it("builds getUser url with id", () => {
      expect(apiUrls.user.getUser("789")).toBe("/user/789");
    });

    it("builds verifyUser url with id", () => {
      expect(apiUrls.user.verifyUser("id1")).toBe("/user/verify/id1");
    });

    it("builds getUserByToken url with token", () => {
      expect(apiUrls.user.getUserByToken("tok")).toBe("/user/token/tok");
    });
  });

  describe("devices", () => {
    it("has correct base url", () => {
      expect(apiUrls.devices.base).toBe("/devices");
    });

    it("has correct blinds url", () => {
      expect(apiUrls.devices.blinds).toBe("/devices/blinds");
    });

    it("has correct thermometers url", () => {
      expect(apiUrls.devices.thermometers).toBe("/devices/thermometers");
    });

    it("builds getDevice url with id", () => {
      expect(apiUrls.devices.getDevice("123")).toBe("/devices/123");
    });

    it("builds getDeviceDataForGraph url with deviceId", () => {
      expect(apiUrls.devices.getDeviceDataForGraph("abc")).toBe(
        "/devices/data/abc"
      );
    });
  });
});
