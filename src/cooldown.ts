const store = new Map<string, number>();

const key = (id: string, name: string) => `${id}:${name}`;

export function parseMs(input: string | number): number {
  if (typeof input === "number") return input;
  const m = input.match(/^(\d+)(ms|s|m|h|d)$/);
  if (!m) throw new Error("Invalid duration");

  const v = Number(m[1]);
  return {
    ms: v,
    s: v * 1000,
    m: v * 60_000,
    h: v * 3_600_000,
    d: v * 86_400_000,
  }[m[2] as any];
}

export const cooldown = {
  hit(id: string, name: string, duration: string | number) {
    store.set(key(id, name), Date.now() + parseMs(duration));
  },

  left(id: string, name: string): number {
    const t = store.get(key(id, name));
    return t ? Math.max(0, Math.ceil((t - Date.now()) / 1000)) : 0;
  },

  ready(id: string, name: string): boolean {
    return this.left(id, name) === 0;
  },

  clear(id: string, name: string) {
    store.delete(key(id, name));
  },
};
