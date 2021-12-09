describe("Zip Procedure", function () {
  it("should join two strings 'a' and 'b'", function () {
    chai.expect(zipStrings("a", "b")).to.equal("ab");
  });

  it("should join the strings 'abc' and '123'", function () {
    chai.expect(zipStrings("abc", "123")).to.equal("a1b2c3");
  });

  it("should join the strings 'abc' and '1'", function () {
    chai.expect(zipStrings("abc", "1")).to.equal("a1bc");
  });

  it("should join the strings '' and '1'", function () {
    chai.expect(zipStrings("", "1")).to.equal("1");
  });

  it("should join the strings 'a' and ''", function () {
    chai.expect(zipStrings("a", "")).to.equal("a");
  });
});
