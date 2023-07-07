/*
This function converts and array of individual names into an object
*/
const getNameAsObject = (name) => {
  const nameObject = {
    firstName: name[0],
    middleNames: name.slice(1, -1),
    lastName: name[name.length - 1],
    fullName: name.join(" "),
  };

  return nameObject;
};
module.exports = getNameAsObject;
