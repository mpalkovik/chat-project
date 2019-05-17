import dayjs from "dayjs";
import "dayjs/locale/sk";
const TODAY = 0;
const TOMMOROW = 1;
export const getCalendar = (difference: number): "Dnes" | "Zajtra" | null => {
  const roundedDifference = Math.floor(difference);
  if (roundedDifference < TODAY || roundedDifference > TOMMOROW) {
    return null;
  }
  return roundedDifference === TOMMOROW ? "Zajtra" : "Dnes";
};

export const getDifferenceBetweenDate = (dateObject: Date): number => {
  return dayjs(dateObject)
    .startOf("day")
    .diff(dayjs().startOf("day"), "day", true);
};

export const getFormattedDate = (dateObject: Date): string =>
  dayjs(dateObject)
    .locale("sk")
    .format("dddd DD. MMM");

export const getDateByTimeString = (date: string): string => {
  const dateObject = new Date(date);
  if (isNaN(dateObject.getTime())) {
    return "Invalid Date";
  }
  const diff = getDifferenceBetweenDate(dateObject);

  const calendar = getCalendar(diff);

  return calendar
    ? `${calendar} - ${getFormattedDate(dateObject)}`
    : getFormattedDate(dateObject);
};
