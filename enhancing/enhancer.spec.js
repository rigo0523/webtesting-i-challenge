const enhancer = require("./enhancer.js");
// test away!
test("Initial Test", () => {
  expect(true).toBe(true);
});

const olympus = {
  name: "Zeus",
  durability: 99,
  enhancement: 19,
};

describe("test repair", () => {
  test("it should test Zeus durability to 100", () => {
    expect(() => {
      enhancer.repair(olympus.durability).toBe(olympus.durability === 100);
    });
  });
});

describe("fail", () => {
  it("it will decrease durability by 5 if enhancement level is under 15", () => {
    const expected = { name: "Zeus", durability: 99, enhancement: 11 };
    expect(enhancer.fail(expected)).toBe(olympus);
  });
});
