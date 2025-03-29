
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


// Q3. Sort by Highest to Lowest Price
function sortPriceHighToLow(objectPrices) {
  return objectPrices.sort((a, b) => { // Syntax can be simplified ton 1 line w/o {}.
    return b.price - a.price;
  });
}
console.log(sortPriceHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 30 },
    { id: 3, price: 60 },
    { id: 4, price: 10 }
  ])
);


// Q4. Promises (Watch Promises videos)
// https://www.youtube.com/watch?v=vn3tm0quoqE


// Q5. Find All the Posts by a Single User
// API: https://jsonplaceholder.typicode.com/posts
async function postsByUser(userID) {
  const allUserPosts = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  // console.log(await allUserPosts.json());
  const userPosts = await allUserPosts.json();
  const filteredPosts = userPosts.filter(element => element.userId === userID);
  console.log(filteredPosts);
}
postsByUser(4);


// Q6. Return the First 6 Incomplete ToDo's
// API: https://jsonplaceholder.typicode.com/todos
async function returnIncompleteToDos(numberOfToDos) {
  const allToDos = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const ToDoStatuses = await allToDos.json();
  let incompleteToDos = ToDoStatuses.filter(element => element.completed === false).slice(0, 6);
  // for (let i = 0; i < numberOfToDos; ++i) {
  // console.log(incompleteToDos);
  // }
  console.log(incompleteToDos);
}
returnIncompleteToDos(6);

