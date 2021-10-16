// Only change code below this line
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countCaunter = countdown(n - 1);
    countCaunter.unshift(n)
    return countCaunter
  }

}
// Only change code above this line