const nameSorter = require("../modules/nameSorter");

/*
Please Note:
If name 'a' comes first alphabetically when compared to name 'b', function expected to return -1
Conversely, if name 'a' comes second alphabetically when compared to name 'b', function expected to return 1
If the names are equal, function expected to return 0  
*/

test("different surnames", () => {
  const a = {
    firstName: "Daniel",
    middleNames: [],
    lastName: "Evans",
    fullName: "Daniel Evans",
  };
  const b = {
    firstName: "Daniel",
    middleNames: [],
    lastName: "Jones",
    fullName: "Daniel Jones",
  };
  expect(nameSorter(a, b)).toBe(-1);
});

test("surname the same, different first name", () => {
  const a = {
    firstName: "Daniel",
    middleNames: [],
    lastName: "Evans",
    fullName: "Daniel Evans",
  };
  const b = {
    firstName: "John",
    middleNames: [],
    lastName: "Evans",
    fullName: "John Evans",
  };
  expect(nameSorter(a, b)).toBe(-1);
});

test("surname, first name the same, different middle name", () => {
  const a = {
    firstName: "Daniel",
    middleNames: ["Connor"],
    lastName: "Evans",
    fullName: "Daniel Connor Evans",
  };
  const b = {
    firstName: "Daniel",
    middleNames: ["Andrew"],
    lastName: "Evans",
    fullName: "Daniel Andrew Evans",
  };
  expect(nameSorter(a, b)).toBe(1);
});

test("surname, first name, second name the same, different third name", () => {
  const a = {
    firstName: "Daniel",
    middleNames: ["Connor", "Trevor"],
    lastName: "Evans",
    fullName: "Daniel Connor Evans",
  };
  const b = {
    firstName: "Daniel",
    middleNames: ["Connor", "Steve"],
    lastName: "Evans",
    fullName: "Daniel Connor Evans",
  };
  expect(nameSorter(a, b)).toBe(1);
});

test("surname and first name the same, but different length of names", () => {
  const a = {
    firstName: "Daniel",
    middleNames: ["Connor"],
    lastName: "Evans",
    fullName: "Daniel Connor Evans",
  };
  const b = {
    firstName: "Daniel",
    middleNames: [],
    lastName: "Evans",
    fullName: "Daniel Evans",
  };
  expect(nameSorter(a, b)).toBe(1);
});

test("same name", () => {
  const a = {
    firstName: "Daniel",
    middleNames: ["Connor"],
    lastName: "Evans",
    fullName: "Daniel Connor Evans",
  };
  const b = {
    firstName: "Daniel",
    middleNames: ["Connor"],
    lastName: "Evans",
    fullName: "Daniel Connor Evans",
  };
  expect(nameSorter(a, b)).toBe(0);
});
