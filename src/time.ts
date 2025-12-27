export interface TimeInfo {
  utc: string;
  jst: string;
  unix: number;
  unixMs: number;
}

export function time(): TimeInfo {
  const now = new Date();

  return {
    utc: now.toISOString(),
    jst: new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" })
    ).toISOString(),
    unix: Math.floor(now.getTime() / 1000),
    unixMs: now.getTime(),
  };
}

export function unix(): number {
  return Math.floor(Date.now() / 1000);
}

export function unixMs(): number {
  return Date.now();
}

export function tz(zone = "UTC"): string {
  return new Date().toLocaleString("en-US", { timeZone: zone });
}
