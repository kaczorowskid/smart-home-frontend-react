import { act, renderHook } from "@testing-library/react";
import { it, expect, describe, beforeEach } from "vitest";
import { useChangeDisplayedDevice } from "../useChangedDisplayedDevice.hook";

describe("useChangeDisplayedDevice", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("maps device data to label/onClick items", () => {
    const data = [
      { id: "1", name: "Sensor A" },
      { id: "2", name: "Sensor B" },
    ];

    const { result } = renderHook(() =>
      useChangeDisplayedDevice("dashboardTemperatureChart", data)
    );

    expect(result.current).toHaveLength(2);
    expect(result.current[0].label).toBe("Sensor A");
    expect(result.current[1].label).toBe("Sensor B");
  });

  it("sets localStorage value when onClick is called", () => {
    const data = [{ id: "device-123", name: "Sensor A" }];

    const { result } = renderHook(() =>
      useChangeDisplayedDevice("dashboardTemperatureChart", data)
    );

    act(() => {
      result.current[0].onClick();
    });

    expect(localStorage.getItem("dashboardTemperatureChart")).toBe(
      "device-123"
    );
  });

  it("returns empty array when data is undefined", () => {
    const { result } = renderHook(() =>
      useChangeDisplayedDevice("dashboardTemperatureChart", undefined)
    );

    expect(result.current).toEqual([]);
  });

  it("returns empty array when data is empty", () => {
    const { result } = renderHook(() =>
      useChangeDisplayedDevice("dashboardTemperatureChart", [])
    );

    expect(result.current).toEqual([]);
  });
});
