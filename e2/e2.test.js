const charsIndexes = require("./e2");

describe("E2: charsIndexes", () => {
  test("Test case 1", () => {
    expect(charsIndexes("abcdef", [1, 3, 5])).toBe("bdf");
  });

  test("Test case 2", () => {
    expect(charsIndexes("imsimulatinghackrank", [2, 4, 6, 8, 10])).toBe(
      "smltn"
    );
  });

  test("Test case 3", () => {
    expect(charsIndexes("imsimulatinghackrank", [1, 2, 5, 9, 200])).toBe(
      "msui"
    );
  });

  test("Test case 4", () => {
    expect(charsIndexes("imsimulatinghackrank", [6, 2, 1, 5])).toBe("lsmu");
  });

  test("Test case 5", () => {
    expect(charsIndexes("imsimulatinghackrank", [9, 8, 2, 6, 4])).toBe("itslm");
  });

  test("Test case 6", () => {
    expect(
      charsIndexes("imsimulatinghackrank", [6, 2, 10, 2042, 2421, 1])
    ).toBe("lsnm");
  });

  test("Test case 7", () => {
    expect(
      charsIndexes("imsimulatinghackrank", [523, 56, 12, 1, 25, 6, 9])
    ).toBe("hmli");
  });

  test("Test case 8", () => {
    expect(
      charsIndexes("imsimulatinghackrank", [1, 24, 525, 2342, 23, 7, 8])
    ).toBe("mat");
  });

  test("Test case 9", () => {
    expect(
      charsIndexes("imsimulatinghackrank", [52, 634, 1, 52, 63, 22, 10, 21])
    ).toBe("mn");
  });

  test("Test case 10", () => {
    expect(
      charsIndexes("imsimulatinghackrank", [82, 9, 2, 4, 7, 199, 245, 15])
    ).toBe("ismak");
  });
});
