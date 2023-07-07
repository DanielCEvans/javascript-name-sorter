const path = require("path");
const fs = require("fs");
/*
This function will check if the given file exists, and if not,
will log a 'file not found' message to the console and stop execution.
If the file exists, the function will returned the resolved path.
*/
const resolveFilePath = (file) => {
  const resolvedPath = path.resolve(file);

  if (!fs.existsSync(resolvedPath)) {
    console.error(`File or directory ${file} not found`);
    process.exit();
  }
  return resolvedPath;
};
module.exports = resolveFilePath;
