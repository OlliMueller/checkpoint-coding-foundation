// Variables for testing
// let strA = "abc";
// let strB = "123";

function zipStrings(strA, strB) {
  //split strA & strB / returns two arrays
  let letterArray = strA.split("");
  let numberArray = strB.split("");
  let zippedArray = [];

  //using array.push in two for-loops
  if (letterArray.length >= numberArray.length) {
    for (let i = 0; i < letterArray.length; i++) {
      zippedArray.push(letterArray[i]);
      zippedArray.push(numberArray[i]);
    }
  } else {
    for (let i = 0; i < numberArray.length; i++) {
      zippedArray.push(letterArray[i]);
      zippedArray.push(numberArray[i]);
    }
  }
  // merge items with array.join() and return it as a string
  let zippedString = zippedArray.join("");
  return zippedString;
}

// execute for testing
zipStrings(strA, strB);
