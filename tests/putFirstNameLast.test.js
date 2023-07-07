const putFirstNameLast = require("../modules/putFirstNameLast");

test("places first name to last name for each name in an array of names", () => {
  expect(
    putFirstNameLast(["Daniel Evans", "Madeleine Jones", "Ted Plato Tilbrook"])
  ).toEqual(["Evans Daniel", "Jones Madeleine", "Plato Tilbrook Ted"]);
});
