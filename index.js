// Code your solution here
// 1. findMatching: returns drivers whose names match the string (case insensitive)
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// 2. fuzzyMatch: returns drivers whose names start with the provided letters (case insensitive)
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// 3. matchName: returns driver objects whose name property matches the provided string exactly
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

