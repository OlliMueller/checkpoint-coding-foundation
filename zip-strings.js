function zipStrings(strA, strB) {
  //split strA & strB, returns two arrays
  letterArray = strA.split("");
  numberArray = strB.split("");
  zippedArray = [];

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
  zippedString = zippedArray.join("");
  return zippedString;
}
