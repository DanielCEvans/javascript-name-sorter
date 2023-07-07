/*
This function removes whitespace and converts each name into an array of individual names
*/
const cleanNames = (data) => {
  const names = data.split("\n").map((name) => {
    return name.trim().split(" ");
  });
  return names;
};
module.exports = cleanNames;
