import { it, expect, describe } from "vitest";
import { formatSensorValue } from "../formatSensorValueutil";

describe("formatSensorValue", () => {
  it("returns undefined when value is undefined", () => {
    expect(formatSensorValue(undefined)).toBeUndefined();
  });

  it("formats positive number to one decimal place", () => {
    expect(formatSensorValue(23.456)).toBe("23.5");
  });

  it("formats zero to one decimal place", () => {
    expect(formatSensorValue(0)).toBe("0.0");
  });

  it("formats negative number to one decimal place", () => {
    expect(formatSensorValue(-5.1234)).toBe("-5.1");
  });

  it("formats whole number to one decimal place", () => {
    expect(formatSensorValue(21)).toBe("21.0");
  });
});
