import { vi, it, expect, describe, beforeEach } from "vitest";
import { Request } from "../Request";

const mockAxiosInstance = vi.fn();

vi.mock("@/lib/axios", () => ({
  axiosInstance: (...args: unknown[]) => mockAxiosInstance(...args),
}));

describe("Request", () => {
  const request = new Request();

  beforeEach(() => {
    mockAxiosInstance.mockReset();
    mockAxiosInstance.mockResolvedValue({ data: { result: "ok" } });
  });

  it("GET calls axios with correct config and returns data", async () => {
    const result = await request.get("/test", { page: 1 });

    expect(mockAxiosInstance).toHaveBeenCalledWith({
      url: "/test",
      method: "GET",
      params: { page: 1 },
    });
    expect(result).toEqual({ result: "ok" });
  });

  it("POST calls axios with correct config and returns data", async () => {
    const result = await request.post("/test", { name: "foo" });

    expect(mockAxiosInstance).toHaveBeenCalledWith({
      url: "/test",
      method: "POST",
      data: { name: "foo" },
    });
    expect(result).toEqual({ result: "ok" });
  });

  it("PATCH calls axios with correct config and returns data", async () => {
    const result = await request.patch("/test", { name: "bar" });

    expect(mockAxiosInstance).toHaveBeenCalledWith({
      url: "/test",
      method: "PATCH",
      data: { name: "bar" },
    });
    expect(result).toEqual({ result: "ok" });
  });

  it("DELETE calls axios with correct config and returns data", async () => {
    const result = await request.delete("/test", { id: "1" });

    expect(mockAxiosInstance).toHaveBeenCalledWith({
      url: "/test",
      method: "DELETE",
      data: { id: "1" },
    });
    expect(result).toEqual({ result: "ok" });
  });

  it("PUT calls axios with correct config and returns data", async () => {
    const result = await request.put("/test", { value: 42 });

    expect(mockAxiosInstance).toHaveBeenCalledWith({
      url: "/test",
      method: "PUT",
      data: { value: 42 },
    });
    expect(result).toEqual({ result: "ok" });
  });
});
