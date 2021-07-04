import { randomInteger } from "./randomInteger";

// Here we check data type that returns from the randomInteger function
test("Return value type from function", () => {
  expect(typeof randomInteger(40, 57)).toBe("number");
});
