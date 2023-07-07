const fs = require("fs");
/*
This function will write the full names to a new file within the same directory. 
*/

const writeSortedNamesToFile = (names, filename) => {
  const fullNames = names.map((name) => name.fullName);
  const data = fullNames.join("\n");

  fs.writeFile(filename, data, "utf8", (err) => {
    if (err) {
      console.log("Error writing to file: ", err);
      return;
    }
  });
};
module.exports = writeSortedNamesToFile;
