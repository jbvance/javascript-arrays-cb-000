let chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

const addElementToBeginningOfArray = (arr, el) => {
  return [el, ...arr];
}

const destructivelyAddElementToBeginningOfArray = (arr, el) => {
  arr = [el, ...arr];
  return arr;
}

