import { it, vi, expect, describe } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { usePaginationItems } from "../Pagination.hooks";

describe("usePaginationItems", () => {
  const defaultProps = {
    count: 10,
    defaultPage: 1,
    onPaginationChange: vi.fn(),
  };

  it("first item is previous button, last is next button", () => {
    const { result } = renderHook(() => usePaginationItems(defaultProps));

    const { items } = result.current;
    expect(items[0].type).toBe("previous");
    expect(items[items.length - 1].type).toBe("next");
  });

  it("disables previous button on first page", () => {
    const { result } = renderHook(() =>
      usePaginationItems({ ...defaultProps, defaultPage: 1 })
    );

    expect(result.current.items[0].disabled).toBe(true);
  });

  it("disables next button on last page", () => {
    const { result } = renderHook(() =>
      usePaginationItems({ ...defaultProps, defaultPage: 10 })
    );

    const { items } = result.current;
    expect(items[items.length - 1].disabled).toBe(true);
  });

  it("marks current page as active", () => {
    const { result } = renderHook(() =>
      usePaginationItems({ ...defaultProps, defaultPage: 1 })
    );

    const pageItems = result.current.items.filter(
      (item) => item.type === "page"
    );
    const activeItems = pageItems.filter((item) => item.isActive);

    expect(activeItems).toHaveLength(1);
    expect(activeItems[0].page).toBe(1);
  });

  it("shows ellipsis for many pages", () => {
    const { result } = renderHook(() =>
      usePaginationItems({ ...defaultProps, count: 10, defaultPage: 5 })
    );

    const types = result.current.items.map((item) => item.type);
    expect(types).toContain("start-ellipsis");
    expect(types).toContain("end-ellipsis");
  });

  it("does not show ellipsis for few pages", () => {
    const { result } = renderHook(() =>
      usePaginationItems({ ...defaultProps, count: 3, defaultPage: 1 })
    );

    const types = result.current.items.map((item) => item.type);
    expect(types).not.toContain("start-ellipsis");
    expect(types).not.toContain("end-ellipsis");
  });

  it("handles single page", () => {
    const { result } = renderHook(() =>
      usePaginationItems({ ...defaultProps, count: 1, defaultPage: 1 })
    );

    const { items } = result.current;
    expect(items[0].type).toBe("previous");
    expect(items[0].disabled).toBe(true);
    expect(items[items.length - 1].type).toBe("next");
    expect(items[items.length - 1].disabled).toBe(true);

    const pageItems = items.filter((item) => item.type === "page");
    expect(pageItems).toHaveLength(1);
    expect(pageItems[0].page).toBe(1);
  });

  it("calls onPaginationChange and updates active page on click", () => {
    const onPaginationChange = vi.fn();
    const { result } = renderHook(() =>
      usePaginationItems({ ...defaultProps, onPaginationChange })
    );

    const page2 = result.current.items.find((item) => item.page === 2);

    act(() => {
      page2!.onClick();
    });

    expect(onPaginationChange).toHaveBeenCalledWith(2);

    const activeItems = result.current.items.filter(
      (item) => item.isActive
    );
    expect(activeItems).toHaveLength(1);
    expect(activeItems[0].page).toBe(2);
  });

  it("navigates forward with next button", () => {
    const onPaginationChange = vi.fn();
    const { result } = renderHook(() =>
      usePaginationItems({ ...defaultProps, onPaginationChange })
    );

    const nextButton = result.current.items[result.current.items.length - 1];

    act(() => {
      nextButton.onClick();
    });

    expect(onPaginationChange).toHaveBeenCalledWith(2);
  });
});
