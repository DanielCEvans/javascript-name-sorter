#!/usr/bin/env node
const { program } = require("commander");
const resolveFilePath = require("./modules/resolveFilePath");
const readNamesFromFile = require("./modules/readNamesFromFile");
const nameSorter = require("./modules/nameSorter");
const printNamesToConsole = require("./modules/printNamesToConsole");
const writeSortedNamesToFile = require("./modules/writeSortedNamesToFile");

program
  .version("1.0.0")
  .arguments("<file>")
  .action((file) => {
    const filePath = resolveFilePath(file);
    const names = readNamesFromFile(filePath);
    names.sort(nameSorter);
    printNamesToConsole(names);
    writeSortedNamesToFile(names, "sorted-names-list.txt");
  });

program.parse(process.argv);
