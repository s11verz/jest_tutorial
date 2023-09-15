const fn = require("./fn");

test("3초 후에 받아온 이름은 Mike", (done) => {
  function callback(name) {
    try {
      expect(name).toBe("Mike");
      done();
    } catch (e) {
      done();
    }
  }
  fn.getName(callback);
});

// resolves, rejects
test("3초 후에 받아온 나이는 20", () => {
  //   return fn.getAge().then((age) => {
  //     expect(age).toBe(20);
  //   });
  return expect(fn.getAge()).resolves.toBe(20);
});

test("3초 후에 받아온 나이는 20", async () => {
  const age = await fn.getAge();
  expect(age).toBe(20);
});

test("3초 후에 받아온 나이는 20", async () => {
  await expect(fn.getAge()).resolves.toBe(20);
});

test("0+1 은 1이야", () => {
  expect(fn.add(0, 1)).toBe(1);
});
