import { it, expect, describe } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useFilteredData } from "../useFilteredData.hook";

describe("useFilteredData", () => {
  const mockData = [
    { id: "1", type: "BEDROOM", name: "Living Room" },
    { id: "2", name: "Kitchen", type: "KITCHEN" },
    { id: "3", name: "Bathroom", type: "BATHROOM" },
  ];

  it("returns all data initially with empty search value", () => {
    const { result } = renderHook(() => useFilteredData(mockData));

    expect(result.current.filteredData).toEqual(mockData);
    expect(result.current.searchbarValue).toBe("");
  });

  it("filters data by matching value (case-insensitive)", () => {
    const { result } = renderHook(() => useFilteredData(mockData));

    act(() => {
      result.current.setSearchbarValue("kitchen");
    });

    expect(result.current.filteredData).toEqual([mockData[1]]);
  });

  it("filters across all object values", () => {
    const { result } = renderHook(() => useFilteredData(mockData));

    act(() => {
      result.current.setSearchbarValue("BATHROOM");
    });

    expect(result.current.filteredData).toHaveLength(1);
    expect(result.current.filteredData![0].name).toBe("Bathroom");
  });

  it("returns empty array when no match found", () => {
    const { result } = renderHook(() => useFilteredData(mockData));

    act(() => {
      result.current.setSearchbarValue("nonexistent");
    });

    expect(result.current.filteredData).toEqual([]);
  });

  it("returns undefined when data is undefined", () => {
    const { result } = renderHook(() => useFilteredData(undefined));

    expect(result.current.filteredData).toBeUndefined();
  });

  it("returns empty array when data is empty", () => {
    const { result } = renderHook(() => useFilteredData([]));

    expect(result.current.filteredData).toEqual([]);
  });

  it("trims whitespace from search value", () => {
    const { result } = renderHook(() => useFilteredData(mockData));

    act(() => {
      result.current.setSearchbarValue("  kitchen  ");
    });

    expect(result.current.filteredData).toEqual([mockData[1]]);
  });

  it("matches partial strings", () => {
    const { result } = renderHook(() => useFilteredData(mockData));

    act(() => {
      result.current.setSearchbarValue("oom");
    });

    expect(result.current.filteredData).toHaveLength(2);
  });
});
