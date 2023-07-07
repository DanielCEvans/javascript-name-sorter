const fs = require("fs");
const validateName = require("./validateName");
/*
This function will read the data from the given filepath line by line.
It will trim the whitespace, validate each name provided in the file, and 
return an array of valid names
*/
const readNamesFromFile = (filepath) => {
  try {
    const data = fs.readFileSync(filepath, "utf8");
    const names = data
      .split("\n")
      .map((name) => name.trim())
      .filter(validateName);
    return names;
  } catch (err) {
    console.log(`Error when reading file: `, err);
    process.exit();
  }
};

module.exports = readNamesFromFile;
