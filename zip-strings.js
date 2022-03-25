function zipStrings(strA, strB) {
  //split strA & strB, returns two arrays
  letterArray = strA.split("");
  numberArray = strB.split("");
  let zippedString = [];

  //using Ternary Operators as if/else-statement
  const arrayLength =
    letterArray.length >= numberArray.length
      ? letterArray.length
      : numberArray.length;

  for (let i = 0; i < arrayLength; i++) {
    zippedString.push(letterArray[i]);
    zippedString.push(numberArray[i]);
  }

  // using ".join" to turn array into one string
  console.log(zippedString.join(""));
  return zippedString.join("");
}
