import { it, expect, describe } from "vitest";
import { dateFormatter } from "../date.utils";

describe("dateFormatter", () => {
  describe("onlyHour", () => {
    it("returns null when date is undefined", () => {
      expect(dateFormatter.onlyHour(undefined)).toBeNull();
    });

    it("formats date to HH:mm", () => {
      const date = new Date("2024-03-15T14:30:00");
      expect(dateFormatter.onlyHour(date)).toBe("14:30");
    });

    it("formats midnight correctly", () => {
      const date = new Date("2024-01-01T00:00:00");
      expect(dateFormatter.onlyHour(date)).toBe("00:00");
    });
  });

  describe("onlyDate", () => {
    it("returns null when date is undefined", () => {
      expect(dateFormatter.onlyDate(undefined)).toBeNull();
    });

    it("formats date to dd.MM.yyyy", () => {
      const date = new Date("2024-03-15T14:30:00");
      expect(dateFormatter.onlyDate(date)).toBe("15.03.2024");
    });
  });

  describe("hourAndDate", () => {
    it("returns null when date is undefined", () => {
      expect(dateFormatter.hourAndDate(undefined)).toBeNull();
    });

    it("formats date to HH:mm dd.MM.yyyy", () => {
      const date = new Date("2024-03-15T14:30:00");
      expect(dateFormatter.hourAndDate(date)).toBe("14:30 15.03.2024");
    });
  });

  describe("dateRange", () => {
    it("returns null when from is undefined", () => {
      expect(dateFormatter.dateRange(undefined, new Date())).toBeNull();
    });

    it("returns null when to is undefined", () => {
      expect(dateFormatter.dateRange(new Date(), undefined)).toBeNull();
    });

    it("returns null when both are undefined", () => {
      expect(dateFormatter.dateRange(undefined, undefined)).toBeNull();
    });

    it("returns single date when from and to are the same day", () => {
      const from = new Date("2024-03-15T08:00:00");
      const to = new Date("2024-03-15T20:00:00");
      expect(dateFormatter.dateRange(from, to)).toBe("15.03.2024");
    });

    it("returns date range when from and to are different days", () => {
      const from = new Date("2024-03-15T08:00:00");
      const to = new Date("2024-03-20T20:00:00");
      expect(dateFormatter.dateRange(from, to)).toBe(
        "15.03.2024 - 20.03.2024"
      );
    });
  });
});
