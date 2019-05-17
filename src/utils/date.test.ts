import {
  getDateByTimeString,
  getDifferenceBetweenDate,
  getCalendar,
  getFormattedDate
} from "./date";
describe("getDifferenceBetweenDate", () => {
  test("Testing difference between dates - no difference", () => {
    expect(getDifferenceBetweenDate(new Date("2019-05-17 00:00:00"))).toEqual(
      0
    );
  });
  test("Testing difference between dates - One day", () => {
    expect(getDifferenceBetweenDate(new Date("2019-05-18 00:00:00"))).toEqual(
      1
    );
  });
  test("Testing difference between dates - More than one day", () => {
    expect(getDifferenceBetweenDate(new Date("2019-05-19 00:00:00"))).toEqual(
      2
    );
  });
  test("Testing difference between dates - yesterday", () => {
    expect(getDifferenceBetweenDate(new Date("2019-05-16 00:00:00"))).toEqual(
      -1
    );
  });
});
describe("getDateByTimeString", () => {
  test("Convert date to text - today", () => {
    expect(getDateByTimeString("2019-05-17 00:00:00")).toEqual(
      "Dnes - Piatok 17. máj"
    );
  });

  test("Convert date to text - today 1 sec to midnight", () => {
    expect(getDateByTimeString("2019-05-17 23:59:59")).toEqual(
      "Dnes - Piatok 17. máj"
    );
  });

  test("Convert date to text - tommorow", () => {
    expect(getDateByTimeString("2019-05-18 00:00:00")).toEqual(
      "Zajtra - Sobota 18. máj"
    );
  });

  test("Convert date to text - tommorow 1 sec to midnight", () => {
    expect(getDateByTimeString("2019-05-18 23:59:59")).toEqual(
      "Zajtra - Sobota 18. máj"
    );
  });

  test("Convert date to text - other day bigger than actual", () => {
    expect(getDateByTimeString("2019-05-19 00:00:00")).toEqual(
      "Nedeľa 19. máj"
    );
  });

  test("Convert date to text - other day smaller than actual", () => {
    expect(getDateByTimeString("2019-05-15 00:00:00")).toEqual(
      "Streda 15. máj"
    );
  });

  test("Invalid date", () => {
    expect(getDateByTimeString("das")).toEqual("Invalid Date");
  });

  test("Invalid time", () => {
    expect(getDateByTimeString("2019-05-17 23:61:59")).toEqual("Invalid Date");
  });
});

describe("getCalendar", () => {
  test("today", () => {
    expect(getCalendar(0)).toEqual("Dnes");
  });
  test("Tomorrow", () => {
    expect(getCalendar(1)).toEqual("Zajtra");
  });
  test("Null smaller than 0", () => {
    expect(getCalendar(-1)).toEqual(null);
  });
  test("Null bigger than 1", () => {
    expect(getCalendar(2)).toEqual(null);
  });
});

describe("getFormattedDate", () => {
  test("Monday", () => {
    expect(getFormattedDate(new Date("2019-05-20 00:00:00"))).toEqual(
      "Pondelok 20. máj"
    );
  });
  test("Tuesday", () => {
    expect(getFormattedDate(new Date("2019-05-21 00:00:00"))).toEqual(
      "Utorok 21. máj"
    );
  });
  test("Wednesday", () => {
    expect(getFormattedDate(new Date("2019-05-22 00:00:00"))).toEqual(
      "Streda 22. máj"
    );
  });
  test("Thursday", () => {
    expect(getFormattedDate(new Date("2019-05-23 00:00:00"))).toEqual(
      "Štvrtok 23. máj"
    );
  });
  test("Friday", () => {
    expect(getFormattedDate(new Date("2019-05-24 00:00:00"))).toEqual(
      "Piatok 24. máj"
    );
  });
  test("Saturday", () => {
    expect(getFormattedDate(new Date("2019-05-25 00:00:00"))).toEqual(
      "Sobota 25. máj"
    );
  });
  test("Sunday", () => {
    expect(getFormattedDate(new Date("2019-05-26 00:00:00"))).toEqual(
      "Nedeľa 26. máj"
    );
  });
});
