const fs = require("fs");

/*
This function will write the names to a new file within the same directory. 
*/

const writeSortedNamesToFile = (names, filename) => {
  const data = names.join("\n");

  fs.writeFile(filename, data, "utf8", (err) => {
    if (err) {
      console.log("Error writing to file: ", err);
      return;
    }
  });
};
module.exports = writeSortedNamesToFile;
