const validateNameLength = require("../modules/./validateNameLength");

test("name with one given name is valid", () => {
  expect(validateNameLength(["Daniel", "Evans"])).toBe(true);
});
test("name with two given names is valid", () => {
  expect(validateNameLength(["Daniel", "Connnor", "Evans"])).toBe(true);
});
test("name that is too short is invalid", () => {
  expect(validateNameLength(["Daniel"])).toBe(false);
});
test("name that is too long is invalid", () => {
  expect(
    validateNameLength(["Daniel", "Connor", "Murphy", "Jones", "Evans"])
  ).toBe(false);
});
