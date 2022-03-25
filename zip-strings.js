// Variables for testing
let strA = "abc";
let strB = "123";

function zipStrings(strA, strB) {
  //split strA & strB, returns two arrays
  let letterArray = strA.split("");
  let numberArray = strB.split("");
  let zippedArray = [];

  //using Ternary Operators for if/else-statement
  const arrayLength =
    letterArray.length >= numberArray.length
      ? letterArray.length
      : numberArray.length;

  for (let i = 0; i < arrayLength; i++) {
    zippedArray.push(letterArray[i]);
    zippedArray.push(numberArray[i]);
  }

  // merge items with array.join(), return it as a string
  let zippedString = zippedArray.join("");
  return zippedString;
}

// execute with Variables in line 2, 3 for testing
zipStrings(strA, strB);
