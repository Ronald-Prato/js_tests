const insideString = require("./e1");

describe("E1: insideString", () => {
  test("Test case 1:", () => {
    const result = insideString(2, 3);
    expect(result).toBe("5, 6, 0.67");
  });

  test("Test case 2:", () => {
    const result = insideString(9, 5);
    expect(result).toBe("14, 45, 1.80");
  });

  test("Test case 3", () => {
    const result = insideString(18, 25);
    expect(result).toBe("43, 450, 0.72");
  });

  test("Test case 4", () => {
    const result = insideString(12, 5);
    expect(result).toBe("17, 60, 2.40");
  });

  test("Test case 5", () => {
    const result = insideString(65, 14);
    expect(result).toBe("79, 910, 4.64");
  });

  test("Test case 6", () => {
    const result = insideString(89, 49);
    expect(result).toBe("138, 4361, 1.82");
  });

  test("Test case 7", () => {
    const result = insideString(12, 6);
    expect(result).toBe("18, 72, 2.00");
  });

  test("Test case 8", () => {
    const result = insideString(2552, 24);
    expect(result).toBe("2576, 61248, 106.33");
  });

  test("Test case 9", () => {
    const result = insideString(56, 90);
    expect(result).toBe("146, 5040, 0.62");
  });

  test("Test case 10", () => {
    const result = insideString(97, 24);
    expect(result).toBe("121, 2328, 4.04");
  });
});
