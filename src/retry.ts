import { sleep } from "./sleep";

export async function retry<T>(
  fn: () => Promise<T>,
  options?: { times?: number; delay?: number }
): Promise<T> {
  const times = options?.times ?? 3;
  const delay = options?.delay ?? 0;

  let lastErr: any;
  for (let i = 0; i < times; i++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
      if (delay) await sleep(delay);
    }
  }
  throw lastErr;
}
