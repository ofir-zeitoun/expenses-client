import { format, isValid } from "date-fns";

export const formatDateAndTime = (
  dateString: string | number | Date
): string => {
  const date = new Date(dateString);
  if (!isValid(date)) {
    return "";
  }
  return format(date, "dd/MM/yyyy HH:mm");
};
