describe("Filter API data", function () {
  const apiData = [
    {
      id: 1,
      description: "",
      price: 0,
      title: "",
    },
    {
      price: 0,
      tags: [],
    },
    {
      id: 3,
      price: 0,
      title: "",
    },
  ];

  it("should filter all objects that contain the key id", function () {
    chai.expect(filterApiData(apiData, ["id"])).to.eql([
      {
        id: 1,
        description: "",
        price: 0,
        title: "",
      },
      {
        id: 3,
        price: 0,
        title: "",
      },
    ]);
  });

  it("should filter all objects with an id and price", function () {
    chai.expect(filterApiData(apiData, ["id", "price"])).to.eql([
      {
        id: 1,
        description: "",
        price: 0,
        title: "",
      },
      {
        id: 3,
        price: 0,
        title: "",
      },
    ]);
  });

  it("should filter all objects with an tags key", function () {
    chai.expect(filterApiData(apiData, ["tags"])).to.eql([
      {
        price: 0,
        tags: [],
      },
    ]);
  });
});
