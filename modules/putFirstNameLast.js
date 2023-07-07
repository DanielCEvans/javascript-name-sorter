/*
This function will return a new array of names, with the first name placed 
at the end for each name in the provided array.
e.g Daniel Connor Evans -> Connor Evans Daniel
*/

const putFirstNameLast = (names) => {
  const firstNameLastArray = names.map((name) => {
    const nameArray = name.split(" ");
    const firstName = nameArray.shift();
    const firstNameLast = `${nameArray.join(" ")} ${firstName}`;
    return firstNameLast;
  });
  return firstNameLastArray;
};
module.exports = putFirstNameLast;
