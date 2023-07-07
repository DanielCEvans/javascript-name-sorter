const sortNames = require("../modules/sortNames");

test("example input data", () => {
  expect(
    sortNames([
      "Janet Parsons",
      "Vaughn Lewis",
      "Adonis Julius Archer",
      "Shelby Nathan Yoder",
      "Marin Alvarez",
      "London Lindsey",
      "Beau Tristan Bentley",
      "Leo Gardner",
      "Hunter Uriah Mathew Clarke",
      "Mikayla Lopez",
      "Frankie Conner Ritter",
    ])
  ).toEqual([
    "Marin Alvarez",
    "Adonis Julius Archer",
    "Beau Tristan Bentley",
    "Hunter Uriah Mathew Clarke",
    "Leo Gardner",
    "Vaughn Lewis",
    "London Lindsey",
    "Mikayla Lopez",
    "Janet Parsons",
    "Frankie Conner Ritter",
    "Shelby Nathan Yoder",
  ]);
});

test("surname the same", () => {
  expect(
    sortNames([
      "Daniel Evans",
      "Madeleine Jones",
      "Ted Plato Tilbrook",
      "Alex Jones",
    ])
  ).toEqual([
    "Daniel Evans",
    "Alex Jones",
    "Madeleine Jones",
    "Ted Plato Tilbrook",
  ]);
});

test("surname and first name the same", () => {
  expect(
    sortNames([
      "Daniel Evans",
      "Madeleine Stacey Jones",
      "Ted Plato Tilbrook",
      "Madeleine Alex Jones",
    ])
  ).toEqual([
    "Daniel Evans",
    "Madeleine Alex Jones",
    "Madeleine Stacey Jones",
    "Ted Plato Tilbrook",
  ]);
});

test("surname, first name, and second name the same", () => {
  expect(
    sortNames([
      "Daniel Evans",
      "Madeleine Alex Karl Jones",
      "Ted Plato Tilbrook",
      "Madeleine Alex Julia Jones",
    ])
  ).toEqual([
    "Daniel Evans",
    "Madeleine Alex Julia Jones",
    "Madeleine Alex Karl Jones",
    "Ted Plato Tilbrook",
  ]);
});

test("surname and first name the same, but different length of names", () => {
  expect(
    sortNames([
      "Daniel Evans",
      "Madeleine Alex Jones",
      "Ted Plato Tilbrook",
      "Madeleine Alex Julia Jones",
    ])
  ).toEqual([
    "Daniel Evans",
    "Madeleine Alex Jones",
    "Madeleine Alex Julia Jones",
    "Ted Plato Tilbrook",
  ]);
});
