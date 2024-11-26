import { format } from "date-fns";

export const dateFormatter = {
  hourAndDate: (dateToFormat: Date | string | undefined) => {
    if (!dateToFormat) {
      return null;
    }

    return format(dateToFormat, "HH:mm dd.MM.yyyy");
  },
  onlyDate: (dateToFormat: Date | string | undefined) => {
    if (!dateToFormat) {
      return null;
    }

    return format(dateToFormat, "dd.MM.yyyy");
  },
  onlyHour: (dateToFormat: Date | string | undefined) => {
    if (!dateToFormat) {
      return null;
    }

    return format(dateToFormat, "HH:mm");
  },
};
