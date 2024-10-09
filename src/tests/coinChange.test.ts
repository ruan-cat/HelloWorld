import { expect, test } from "vitest";

let COINS = [64, 16, 4, 1];
function coinChange(rest, idx) {
  if (rest > COINS[idx]) {
    rest -= COINS[idx];
    return 1 + coinChange(rest, idx);
  } else if (rest > 0) {
    return coinChange(rest, +idx);
  }
  return 1;
}

// const coinChangeInput

// function main() {
//   // let n = parseInt(input.value);
//   let ans = coinChange(1024 - n, 0);
//   alert(ans);
// }

test("测试返回值", () => {
  const n = 200;
  expect(coinChange(1024 - n, 0)).toBe(17);
});
