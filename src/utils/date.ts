import dayjs from "dayjs";
import "dayjs/locale/sk";

const getCalendar = (difference: number): "Dnes" | "Zajtra" | null => {
  const roundedDifference = Math.floor(difference);
  if (roundedDifference < -1 || roundedDifference > 0) {
    return null;
  }
  return roundedDifference === -1 ? "Zajtra" : "Dnes";
};

const getDateObject = (date: string): Date => new Date(date);

export const getDifferenceBetweenDate = (dateObject: Date): number => {
  return dayjs()
    .startOf("day")
    .diff(dayjs(dateObject).startOf("day"), "day", true);
};
const getFormattedDate = (dateObject: Date): string =>
  dayjs(dateObject)
    .locale("sk")
    .format("dddd DD. MMM");

export const getDateByTimeString = (date: string): string => {
  const dateObject = getDateObject(date);
  if (isNaN(dateObject.getTime())) {
    return "Invalid Date";
  }
  const diff = getDifferenceBetweenDate(dateObject);

  const calendar = getCalendar(diff);

  return calendar
    ? `${calendar} - ${getFormattedDate(dateObject)}`
    : getFormattedDate(dateObject);
};
