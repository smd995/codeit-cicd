import { test, expect, describe } from "vitest";
import { sum } from "./sum";
import { sub } from "./subtract";
import { mul } from "./multiply";
import { div } from "./divide";

describe("Calculate 테스트", () => {
  test("sum, 1+1 === 2", () => {
    const data = sum(1, 1);
    const result = 2;

    expect(data).toBe(result);
  });

  test("sub, 1-1 === 0", () => {
    const data = sub(1, 1);
    const result = 0;

    expect(data).toBe(result);
  });

  test("mul, 2 * 7 === 14", () => {
    const data = mul(2, 7);
    const result = 14;
    expect(data).toBe(result);
  });

  test("div, 5 / 2 === 2.5", () => {
    const data = div(5, 2);
    const result = 2.5;
    expect(data).toBe(result);
  });
});
