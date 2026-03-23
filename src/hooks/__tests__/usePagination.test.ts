import { it, expect, describe } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { usePagination } from "../usePagination.hook";

describe("usePagination", () => {
  const generateItems = (count: number) =>
    Array.from({ length: count }, (_, i) => ({ id: i + 1 }));

  it("calculates correct page count with default pageSize of 10", () => {
    const data = generateItems(25);
    const { result } = renderHook(() => usePagination({ data }));

    expect(result.current.paginationData.pagination.count).toBe(3);
  });

  it("returns first page data by default", () => {
    const data = generateItems(25);
    const { result } = renderHook(() => usePagination({ data }));

    expect(result.current.paginationData.data).toHaveLength(10);
    expect(result.current.paginationData.data![0]).toEqual({ id: 1 });
    expect(result.current.paginationData.data![9]).toEqual({ id: 10 });
  });

  it("returns correct data for page 2", () => {
    const data = generateItems(25);
    const { result } = renderHook(() => usePagination({ data }));

    act(() => {
      result.current.handlePaginationChange(2);
    });

    expect(result.current.paginationData.data).toHaveLength(10);
    expect(result.current.paginationData.data![0]).toEqual({ id: 11 });
  });

  it("returns remaining items on last page", () => {
    const data = generateItems(25);
    const { result } = renderHook(() => usePagination({ data }));

    act(() => {
      result.current.handlePaginationChange(3);
    });

    expect(result.current.paginationData.data).toHaveLength(5);
    expect(result.current.paginationData.data![0]).toEqual({ id: 21 });
  });

  it("works with custom pageSize", () => {
    const data = generateItems(12);
    const { result } = renderHook(() =>
      usePagination({ data, pageSize: 5 })
    );

    expect(result.current.paginationData.pagination.count).toBe(3);
    expect(result.current.paginationData.data).toHaveLength(5);
  });

  it("handles undefined data", () => {
    const { result } = renderHook(() =>
      usePagination({ data: undefined })
    );

    expect(result.current.paginationData.pagination.count).toBe(0);
    expect(result.current.paginationData.data).toBeUndefined();
  });

  it("resets to default page when data changes", () => {
    const data1 = generateItems(25);
    const data2 = generateItems(15);

    const { result, rerender } = renderHook(
      ({ data }) => usePagination({ data }),
      { initialProps: { data: data1 } }
    );

    act(() => {
      result.current.handlePaginationChange(3);
    });

    expect(result.current.paginationData.pagination.defaultPage).toBe(3);

    rerender({ data: data2 });

    expect(result.current.paginationData.pagination.defaultPage).toBe(1);
    expect(result.current.paginationData.data).toHaveLength(10);
  });

  it("updates defaultPage in pagination state on change", () => {
    const data = generateItems(25);
    const { result } = renderHook(() => usePagination({ data }));

    act(() => {
      result.current.handlePaginationChange(2);
    });

    expect(result.current.paginationData.pagination.defaultPage).toBe(2);
  });
});
