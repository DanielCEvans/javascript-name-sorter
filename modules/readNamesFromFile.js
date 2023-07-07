const fs = require("fs");
const cleanNames = require("./cleanNames");
const validateNameLength = require("./validateNameLength");
const getNameAsObject = require("./getNameAsObject");
/*
This function will read the data from the given filepath, clean, validate,
and transform the data.
This function will return an array of objects
*/

const readNamesFromFile = (filepath) => {
  try {
    const data = fs.readFileSync(filepath, "utf8");

    // Remove whitespace and return an array of names where each name is itself an array of individual names
    // e.g. [['Daniel', 'Connor', 'Evans'], ['Harry', 'Jones']]
    const names = cleanNames(data);

    // Validate the length of the names
    const validNames = names.filter(validateNameLength);

    // Format each name as an object
    const namesAsObjects = validNames.map(getNameAsObject);

    return namesAsObjects;
  } catch (err) {
    console.log(`Error when reading file: `, err);
    process.exit();
  }
};

module.exports = readNamesFromFile;
