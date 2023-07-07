const putLastNameFirst = require("./putLastNameFirst");
const putFirstNameLast = require("./putFirstNameLast");

/*
This function will sort an array of names by last name, then by given 
names starting from the first name. The array of sorted names will be returned. 
*/

const sortNames = (names) => {
  // Swap the last name so it becomes the first name
  const lastNameFirst = putLastNameFirst(names);

  // Sort the array of names using the sort() method. The sort() method in javascript
  // uses a variation of the QuickSort algorithm with an average-case time complexitiy of O(n log n)
  const lastNameFirstSorted = lastNameFirst.sort();

  // Swap the first name so it becomes the last name
  const sortedNames = putFirstNameLast(lastNameFirstSorted);

  return sortedNames;
};

module.exports = sortNames;
