import { type AxiosError } from "axios";
import { it, expect, describe } from "vitest";
import { type CustomAxiosError } from "@/types/common.types";
import { apiErrorMapper } from "../errorMapper";

describe("apiErrorMapper", () => {
  it("returns response data message when available", () => {
    const error = {
      message: "Request failed",
      response: {
        data: {
          message: "Invalid credentials",
        },
      },
    } as CustomAxiosError;

    expect(apiErrorMapper(error)).toBe("Invalid credentials");
  });

  it("falls back to error.message when response is missing", () => {
    const error = {
      response: undefined,
      message: "Network Error",
    } as AxiosError as CustomAxiosError;

    expect(apiErrorMapper(error)).toBe("Network Error");
  });

  it("falls back to error.message when response.data.message is empty", () => {
    const error = {
      message: "Request failed",
      response: {
        data: {
          message: "",
        },
      },
    } as CustomAxiosError;

    expect(apiErrorMapper(error)).toBe("Request failed");
  });
});
