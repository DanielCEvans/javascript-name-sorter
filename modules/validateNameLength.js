/*
This function checks that each name contains a first and last name,
and that there is a maximum of 3 given names (including the first name)
*/
const validateNameLength = (name) => {
  return name.length <= 4 && name.length > 1;
};
module.exports = validateNameLength;
