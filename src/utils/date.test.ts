import { getDateByTimeString, getDifferenceBetweenDate } from "./date";

test("Testing difference between dates - no difference", () => {
  expect(getDifferenceBetweenDate(new Date("2019-05-16 00:00:00"))).toEqual(0);
});

test("Convert date to text - today", () => {
  expect(getDateByTimeString("2019-05-16 00:00:00")).toEqual(
    "Dnes - Štvrtok 16. máj"
  );
});
test("Convert date to text - tommorow", () => {
  expect(getDateByTimeString("2019-05-17 00:00:00")).toEqual(
    "Zajtra - Piatok 17. máj"
  );
});

test("Convert date to text - other day bigger than actual", () => {
  expect(getDateByTimeString("2019-05-18 00:00:00")).toEqual("Sobota 18. máj");
});

test("Convert date to text - other day smaller than actual", () => {
  expect(getDateByTimeString("2019-05-15 00:00:00")).toEqual("Streda 15. máj");
});
test("Invalid date", () => {
  expect(getDateByTimeString("das")).toEqual("Invalid Date");
});
