export interface FetchResult<T = any> {
  ok: boolean;
  status: number;
  data?: T;
  error?: string;
}

async function coreFetch(
  url: string,
  options?: RequestInit
): Promise<FetchResult> {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        "content-type": "application/json",
        ...(options?.headers ?? {}),
      },
    });

    const text = await res.text();
    let data: any = text;

    try {
      data = JSON.parse(text);
    } catch {}

    return {
      ok: res.ok,
      status: res.status,
      data,
    };
  } catch (e: any) {
    return {
      ok: false,
      status: 0,
      error: e.message ?? "fetch failed",
    };
  }
}

export const fetchUtil = Object.assign(
  (url: string, options?: RequestInit) => coreFetch(url, options),
  {
    get: (url: string) => coreFetch(url),
    post: (url: string, body?: any) =>
      coreFetch(url, {
        method: "POST",
        body: JSON.stringify(body),
      }),
  }
);
