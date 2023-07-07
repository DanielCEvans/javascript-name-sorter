const containsNumbers = (str) => {
  // Regular expression to check if the string contains numbers
  const regex = /\d/;

  return regex.test(str);
};

const validateName = (name) => {
  if (name.split(" ").length > 4) {
    console.log(`${name} is too long and has been removed from the list`);
    return false;
  }

  if (name.split(" ").length === 1) {
    console.log(`${name} is too short and has been removed from the list`);
    return false;
  }

  if (containsNumbers(name)) {
    console.log(`${name} contains numbers and has been removed from the list`);
    return false;
  }
  return true;
};
module.exports = validateName;
