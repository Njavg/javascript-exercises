const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  const array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  const productOfAllNums = array.reduce((total, currentItem) => {
  return total + currentItem;
}, 0);
return productOfAllNums;
};


// Do not edit below this line
module.exports = sumAll;
