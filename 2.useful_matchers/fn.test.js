const fn = require("./fn");

// toBe
test("2 더하기 3은 5야.", () => {
  expect(fn.add(2, 3)).toBe(5);
});

// toEqual : 객체나 배열은 재귀적으로 돌면서 값을 확인하기 때문에 toBe 가 아니라 toEqual을 써야함
test("이름과 나이를 전달받아서 객체를 변환해줘", () => {
  expect(fn.makeUser("Mike", 30)).toEqual({
    name: "Mike",
    age: 30,
  });
});

// toStrictEqual : 보다 엄격하게 테스트 하기 위해
test("이름과 나이를 전달받아서 객체를 변환해줘", () => {
  expect(fn.makeUser("Mike", 30)).toStrictEqual({
    name: "Mike",
    age: 30,
  });
});

// toBeNull
// toBeUndefined
// toBeDefined
test("null은 null입니다.", () => {
  expect(null).toBeNull();
});

// toBeTruthy
// toBeFalsy
test("비어있지 않은 문자열은 true 입니다.", () => {
  expect(fn.add("hello", "world")).toBeTruthy();
});

// toBeGreaterThan : 크다
// toBeGreaterThanOrEqual : 크거나 같다
// toBeLessThen : 작다
// toBeLessThanOrEqual : 작거나 같다
test("ID는 10자 ㅇ이하여야 합니다.", () => {
  const id = "THE_BLACK";
  expect(id.length).toBeLessThanOrEqual(10);
});

test("비밀번호 4자리.", () => {
  const pw = "1234";
  expect(pw.length).toBe(4);
});

test("비밀번호 4자리.", () => {
  const pw = "1234";
  expect(pw.length).toEqual(4);
});

// toBeCloseTo : 소수 연산
test("0.1 더하기 0.2는 0.3 입니다.", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

// toMatch
test("Hello World에 a 라는 글자가 있나요?", () => {
  expect("Hello World").toMatch(/h/i); // 대소문자 구분하지 않으려면 뒤에 i를 붙임
});

// toContain
test("유저 리스트에 Mike가 있나?", () => {
  const user = "Mike";
  const userList = ["List", "Mike", "Bab"];
  expect(userList).toContain(user);
});

// toThrow
test("이거 에러 나나요?", () => {
  expect(() => fn.throwErr()).toThrow("xx");
});
