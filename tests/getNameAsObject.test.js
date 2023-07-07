const getNameAsObject = require("../modules/getNameAsObject");

test("formatting correctly with one middle name", () => {
  const name = ["Daniel", "Connor", "Evans"];
  expect(getNameAsObject(name)).toEqual({
    firstName: "Daniel",
    middleNames: ["Connor"],
    lastName: "Evans",
    fullName: "Daniel Connor Evans",
  });
});
test("formatting correctly with one middle name", () => {
  const name = ["Daniel", "Evans"];
  expect(getNameAsObject(name)).toEqual({
    firstName: "Daniel",
    middleNames: [],
    lastName: "Evans",
    fullName: "Daniel Evans",
  });
});

test("formatting correctly with multiple middle names", () => {
  const name = ["Daniel", "Connor", "John", "Evans"];
  expect(getNameAsObject(name)).toEqual({
    firstName: "Daniel",
    middleNames: ["Connor", "John"],
    lastName: "Evans",
    fullName: "Daniel Connor John Evans",
  });
});
