
// Q1. Show Rating
function showRating(userRating) {
  let convertedRating = ``;
  for (let i = 1; i <= userRating; ++i) { // Math.floor?
    convertedRating = convertedRating + `*`;
    if (i !== userRating) {
      convertedRating += ` `; // like above but short syntax
    }
  }
  if (!Number.isInteger(userRating)) { // Check if value is !NOT whole (is decimal)
    convertedRating += `.`;
  }
  return convertedRating;
}
console.log(showRating(4.5));


// Q2. Sort by Lowest to Highest Price
function sortLowToHigh(arr1) {
  return arr1.sort((a, b) => a - b);
}
console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));


// Q3. 