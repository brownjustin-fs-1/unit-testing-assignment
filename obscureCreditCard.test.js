const obscureCreditCard = require("./obscureCreditCard");

describe("obscureCreditCard", () => {
  // Positive tests: valid inputs
  test("masks a 12-character number", () => {
    expect(obscureCreditCard("123456789012")).toBe("********9012");
  });

  test("masks a 13-character number", () => {
    expect(obscureCreditCard("1234567890123")).toBe("*********0123");
  });

  test("masks a 14-character number", () => {
    expect(obscureCreditCard("12345678901234")).toBe("**********1234");
  });

  test("masks a 15-character number", () => {
    expect(obscureCreditCard("123456789012345")).toBe("***********2345");
  });

  test("masks a 16-character number", () => {
    expect(obscureCreditCard("1234567890123456")).toBe("************3456");
  });

  test("handles a string with leading zeros", () => {
    expect(obscureCreditCard("000012345678")).toBe("********5678");
  });

  test("accepts nonnumeric characters when the length is valid", () => {
    expect(obscureCreditCard("abcdefghijkl")).toBe("********ijkl");
  });

  // Negative tests: invalid lengths
  test("rejects an 11-character string", () => {
    expect(obscureCreditCard("12345678901")).toBe("Invalid Credit Card");
  });

  test("rejects a 17-character string", () => {
    expect(obscureCreditCard("12345678901234567")).toBe("Invalid Credit Card");
  });

  test("rejects an empty string", () => {
    expect(obscureCreditCard("")).toBe("Invalid Credit Card");
  });
});
