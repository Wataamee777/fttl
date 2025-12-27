export interface FetchResult<T = any> {
  ok: boolean;
  status: number;
  data?: T;
  error?: string;
}

async function baseFetch(
  url: string,
  options?: RequestInit
): Promise<FetchResult> {
  try {
    const res = await fetch(url, options);
    const text = await res.text();

    let data: any = text;
    try { data = JSON.parse(text); } catch {}

    return { ok: res.ok, status: res.status, data };
  } catch (e: any) {
    return { ok: false, status: 0, error: e.message };
  }
}

export const fetchUtil = Object.assign(
  (url: string, options?: RequestInit) => baseFetch(url, options),
  {
    get: (url: string) => baseFetch(url),
    post: (url: string, body?: any) =>
      baseFetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      }),
  }
);
