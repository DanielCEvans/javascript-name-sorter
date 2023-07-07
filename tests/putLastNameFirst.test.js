const putLastNameFirst = require("../modules/putLastNameFirst");

test("places first name to last name for each name in an array of names", () => {
  expect(
    putLastNameFirst(["Daniel Evans", "Madeleine Jones", "Ted Plato Tilbrook"])
  ).toEqual(["Evans Daniel", "Jones Madeleine", "Tilbrook Ted Plato"]);
});
