
// Q1. Show Rating
function showRating(userRating) {
  let convertedRating = ``;
  for (let i = 1; i <= userRating; ++i) {
    userRating = userRating + `*`;
    if (i !== userRating) {
      userRating = userRating + ` `;
    }
  }
  return convertedRating;
}
console.log(showRating(5));

