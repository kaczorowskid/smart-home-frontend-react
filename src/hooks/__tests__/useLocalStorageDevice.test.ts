import { act, renderHook } from "@testing-library/react";
import { it, expect, describe, beforeEach } from "vitest";
import { useLocalStorageDevice } from "../useLocalStorageDevice.hook";

describe("useLocalStorageDevice", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns empty string when localStorage has no value", () => {
    const { result } = renderHook(() =>
      useLocalStorageDevice("dashboardTemperatureChart")
    );

    expect(result.current.deviceId).toBe("");
  });

  it("reads initial value from localStorage", () => {
    localStorage.setItem("dashboardTemperatureChart", "device-123");

    const { result } = renderHook(() =>
      useLocalStorageDevice("dashboardTemperatureChart")
    );

    expect(result.current.deviceId).toBe("device-123");
  });

  it("sets value in both state and localStorage", () => {
    const { result } = renderHook(() =>
      useLocalStorageDevice("dashboardTemperatureChart")
    );

    act(() => {
      result.current.setDeviceId("device-456");
    });

    expect(result.current.deviceId).toBe("device-456");
    expect(localStorage.getItem("dashboardTemperatureChart")).toBe(
      "device-456"
    );
  });

  it("updates value when setDeviceId is called multiple times", () => {
    const { result } = renderHook(() =>
      useLocalStorageDevice("dashboardTemperatureChart")
    );

    act(() => {
      result.current.setDeviceId("first");
    });

    act(() => {
      result.current.setDeviceId("second");
    });

    expect(result.current.deviceId).toBe("second");
    expect(localStorage.getItem("dashboardTemperatureChart")).toBe("second");
  });
});
