import { HttpResult } from '../types/HttpResult';

export interface GetParams {
  readonly url: string;
  readonly query?: Record<string, unknown>;
  readonly headers?: Record<string, string>;
}
export async function getClient<T = unknown>({ url, query, headers }: GetParams): Promise<HttpResult<T, unknown>> {
  const requestUrl = addQueryParameter(url, query);
  const request = new Request(requestUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', ...headers },
  });
  const result = await fetch(request);
  if (!result.ok) {
    return {
      isSuccess: false,
      error: {
        message: 'error',
      },
    };
  }
  return {
    isSuccess: true,
    response: await result.json(),
  };
}

function addQueryParameter(url: string, query?: Record<string, unknown>): string {
  const urlWithQuery = new URL(`http://localhost:3000${url}`);
  if (query) {
    Object.entries(query).forEach(([key, value]) => urlWithQuery.searchParams.append(key, String(value)));
  }
  return urlWithQuery.toString();
}
