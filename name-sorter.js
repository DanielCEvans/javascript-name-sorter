#!/usr/bin/env node
const { program } = require("commander");
const resolveFilePath = require("./modules/resolveFilePath");
const readNamesFromFile = require("./modules/readNamesFromFile");
const sortNames = require("./modules/sortNames");
const printNamesToConsole = require("./modules/printNamesToConsole");
const writeSortedNamesToFile = require("./modules/writeSortedNamesToFile");

program
  .version("1.0.0")
  .arguments("<file>")
  .action((file) => {
    const filePath = resolveFilePath(file);
    const names = readNamesFromFile(filePath);
    const sortedNames = sortNames(names);
    printNamesToConsole(sortedNames);
    writeSortedNamesToFile(sortedNames, "sorted-names-list.txt");
  });

program.parse(process.argv);
