export function percent(dividend: number, divisor: number) {
  return divisor > 0 ? Math.round(100 * dividend / divisor) : 0
}

export function sum(...nums: Array<number>) {
  return nums.reduce((prev: number, next: number) => prev + next, 0)
}

