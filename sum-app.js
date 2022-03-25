// use constructor-method with this.numbers-property...
// to make it available in all 3 following methods (addNumber, getSum & reset)
class SumApp {
  constructor() {
    this.numbers = [];
  }

  //push a "number" into the array each time addNumber is executed
  addNumber(number) {
    this.numbers.push(number);
  }

  // take an array of numbers, reduce them to the sum; default (startValue)= 0
  getSum() {
    return this.numbers.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  }

  // delete all numbers previously added to the array
  reset() {
    this.numbers = [];
  }
}
