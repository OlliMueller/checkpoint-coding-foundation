describe("Sum App", function () {
  it("SumApp should have numbers property", function () {
    const sumApp = new SumApp();
    chai.expect(sumApp).to.have.property("numbers");
  });

  it("SumApp should have addNumber method", function () {
    const sumApp = new SumApp();
    chai.expect(sumApp).to.have.property("addNumber");
  });

  it("The addNumber method should add a number to the numbers array", function () {
    const sumApp = new SumApp();
    sumApp.addNumber(1);
    sumApp.addNumber(1);
    sumApp.addNumber(1);
    chai.expect(sumApp.numbers.length).to.equal(3);
  });

  it("SumApp should have getSum method", function () {
    const sumApp = new SumApp();
    chai.expect(sumApp).to.have.property("getSum");
  });

  it("The getSum method should sum all added numbers", function () {
    const sumApp = new SumApp();
    sumApp.addNumber(1);
    sumApp.addNumber(2);
    sumApp.addNumber(3);
    chai.expect(sumApp.getSum()).to.equal(6);
  });

  it("SumApp should have getSum method", function () {
    const sumApp = new SumApp();
    chai.expect(sumApp).to.have.property("getSum");
  });

  it("The reset method should remove all added numbers", function () {
    const sumApp = new SumApp();
    sumApp.addNumber(1);
    sumApp.reset();
    chai.expect(sumApp.numbers.length).to.equal(0);
  });
});
