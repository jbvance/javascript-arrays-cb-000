var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = (arr, el) => {
  return [el, ...arr];
};

var destructivelyAddElementToBeginningOfArray = (arr, el) => {
  arr.unshift(el);
  return arr;
};

var addElementToEndOfArray = (arr, el) => {
  return [...arr, el];
};

var destructivelyAddElementToEndOfArray = (arr, el) => {
  return arr.push(el);
};
