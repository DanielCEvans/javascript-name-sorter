/*
This function will return a new array of names, with the last name placed 
at the beginning for each name in the provided array.
e.g Daniel Connor Evans ->  Evans Daniel Connor
*/

const putLastNameFirst = (names) => {
  const lastNameFirstArray = names.map((name) => {
    const nameArray = name.split(" ");
    const lastName = nameArray.pop();
    const lastNameFirst = `${lastName} ${nameArray.join(" ")}`;
    return lastNameFirst;
  });
  return lastNameFirstArray;
};
module.exports = putLastNameFirst;
