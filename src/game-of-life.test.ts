import { isTrue } from "./game-of-life"

describe("cartographer", () => {
  it("isTrue should return true", () => {
    expect(isTrue()).toBe(true)
  })
})