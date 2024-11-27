import { format } from "date-fns";

export const dateFormatter = {
  hourAndDate: (dateToFormat: Date | undefined) => {
    if (!dateToFormat) {
      return null;
    }

    return format(dateToFormat, "HH:mm dd.MM.yyyy");
  },
  onlyDate: (dateToFormat: Date | undefined) => {
    if (!dateToFormat) {
      return null;
    }

    return format(dateToFormat, "dd.MM.yyyy");
  },
  onlyHour: (dateToFormat: Date | undefined) => {
    if (!dateToFormat) {
      return null;
    }

    return format(dateToFormat, "HH:mm");
  },
  dateRange: (from: Date | undefined, to: Date | undefined) => {
    if (!from || !to) {
      return null;
    }

    if (from.toDateString() === to.toDateString()) {
      return format(to, "dd.MM.yyyy");
    }

    return `${format(from, "dd.MM.yyyy")} - ${format(to, "dd.MM.yyyy")}`;
  },
};
