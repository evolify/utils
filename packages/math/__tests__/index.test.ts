import { sum, percent } from "../src"

test("sum", () => {
  expect(sum(1, 2, 3)).toBe(6)
})

test("percent", ()=>{
  expect(percent(1, 0)).toBe(0)
  expect(percent(7, 11)).toBe(64)
})