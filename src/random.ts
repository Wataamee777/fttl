export const random = {
  int(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  pick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  },
};
