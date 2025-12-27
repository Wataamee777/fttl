const store = new Map<string, number>();

function key(id: string, name: string) {
  return `${id}:${name}`;
}

function parseDuration(input: string | number): number {
  if (typeof input === "number") return input * 1000;

  const match = input.match(/^(\d+)(s|m|h|d)$/);
  if (!match) throw new Error("Invalid duration format");

  const value = Number(match[1]);
  const unit = match[2];

  const table = {
    s: 1000,
    m: 60_000,
    h: 3_600_000,
    d: 86_400_000,
  };

  return value * table[unit];
}

export const cooldown = {
  hit(id: string, name: string, duration: string | number) {
    store.set(key(id, name), Date.now() + parseDuration(duration));
  },

  left(id: string, name: string): number {
    const expire = store.get(key(id, name));
    if (!expire) return 0;
    return Math.max(0, Math.ceil((expire - Date.now()) / 1000));
  },

  clear(id: string, name: string) {
    store.delete(key(id, name));
  },
};
