/*
This function will sort names by last name, then by given names starting from the first name.  
If name 'a' comes first alphabetically when compared to name 'b', function will return -1
Conversely, if name 'a' comes second alphabetically when compared to name 'b', function will return 1
If the names are equal, function will return 0  
*/

const nameSorter = (a, b) => {
  const nameA = `${a.lastName} ${a.firstName} ${a.middleNames.join(
    " "
  )}`.toUpperCase();

  const nameB = `${b.lastName} ${b.firstName} ${b.middleNames.join(
    " "
  )}`.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
};

module.exports = nameSorter;
