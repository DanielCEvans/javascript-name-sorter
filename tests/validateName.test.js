const validateName = require("../modules/validateName");

test("name with one given name is valid", () => {
  expect(validateName("Daniel Evans")).toBe(true);
});
test("name with two given names is valid", () => {
  expect(validateName("Daniel Connnor Evans")).toBe(true);
});
test("name that is too short is invalid", () => {
  expect(validateName("Daniel")).toBe(false);
});
test("name that is too long is invalid", () => {
  expect(validateName("Daniel Connor Murphy Jones Evans")).toBe(false);
});
test("name containing numbers is invalid", () => {
  expect(validateName("Daniel12 Evans")).toBe(false);
});
