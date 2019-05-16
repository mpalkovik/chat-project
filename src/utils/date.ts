import dayjs from "dayjs";
import "dayjs/locale/sk";

export const getDateByTimestamp = (timestamp: number): string => {
  const diff = dayjs()
    .startOf("day")
    .diff(dayjs(timestamp * 1000).startOf("day"), "day", true);

  const day =
    diff <= -2 ? null : diff <= -1 ? "Zajtra" : diff <= 0 ? "Dnes" : null;
  if (day) {
    return (
      day +
      dayjs(timestamp * 1000)
        .locale("sk")
        .format(" DD. MMM")
    );
  }
  return dayjs(timestamp * 1000)
    .locale("sk")
    .format("dddd DD. MMM");
};
