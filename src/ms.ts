export function ms(input: number | string): number | string {
  if (typeof input === "number") {
    if (input >= 3_600_000) return `${input / 3_600_000}h`;
    if (input >= 60_000) return `${input / 60_000}m`;
    if (input >= 1000) return `${input / 1000}s`;
    return `${input}ms`;
  }

  const m = input.match(/^(\d+)(ms|s|m|h)$/);
  if (!m) throw new Error("Invalid ms string");

  const v = Number(m[1]);
  return { ms: v, s: v * 1000, m: v * 60_000, h: v * 3_600_000 }[m[2]];
}
