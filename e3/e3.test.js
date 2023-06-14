const replaceTheChar = require("./e3");

describe("E3: replaceTheChar", () => {
  test("Test case 1 ", () => {
    expect(replaceTheChar("", "x", 0)).toBe("");
  });

  test("Test case 2 ", () => {
    expect(replaceTheChar("a", "x", 0)).toBe("x");
  });

  test("Test case 3 ", () => {
    expect(replaceTheChar("hello", "x", 10)).toBe("hello");
  });

  test("Test case 4 ", () => {
    expect(replaceTheChar("hello", "x", 2)).toBe("hexlo");
  });

  test("Test case 5 ", () => {
    expect(replaceTheChar("hello", "x", 0)).toBe("xello");
  });

  test("Test case 6 ", () => {
    expect(replaceTheChar("hello", "x", 4)).toBe("hellx");
  });

  test("Test case 7 ", () => {
    expect(replaceTheChar("hello", "x", 2)).toBe("hexlo");
  });

  test("Test case 8 ", () => {
    expect(replaceTheChar("hello world", "x", 2)).toBe("hexlo world");
  });

  test("Test case 9 ", () => {
    const longString =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    const expectedString =
      "Lxrem ipsum dolor sit amet, consectetur adipiscing elit.";
    expect(replaceTheChar(longString, "x", 1)).toBe(expectedString);
  });

  test("Test case 10", () => {
    expect(replaceTheChar("hello", "replacement", 2)).toBe("hereplacementlo");
  });
});
