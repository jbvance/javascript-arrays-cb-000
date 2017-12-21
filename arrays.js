var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = (arr, el) => {
  return [el, ...arr];
};

var destructivelyAddElementToBeginningOfArray = (arr, el) => {
  arr = [el, ...arr];
  return arr;
};
