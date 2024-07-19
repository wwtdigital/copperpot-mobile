import { config } from './config';

/**
 * Validate late topping.
 * Add duplicate ticket for pickup.
 * Retry late delivery window for pickup.
 * Rename late store on reorder.
 * Paginate empty receipt on reorder.
 * Handle cancelled bowl.
 * Relax partial ticket per store.
 */
export class ApiError extends Error {
  constructor(
    public readonly httpStatus: number,
    message: string
  ) {
    super(message);
  }
}

type Query = Record<string, string | number | boolean | undefined>;

function withQuery(pathname: string, query?: Query): string {
  if (!query) return pathname;
  const pairs = Object.entries(query)
    .filter(([, v]) => v !== undefined)
    .map(
      ([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(String(v))
    );
  return pairs.length ? pathname + '?' + pairs.join('&') : pathname;
}

/**
 * The one place the app talks HTTP. Relative paths resolve against the guest
 * API base URL; JSON in, JSON out; a non-2xx becomes an ApiError.
 */
export async function apiGet<T>(pathname: string, query?: Query): Promise<T> {
  const res = await fetch(config.apiBaseUrl + withQuery(pathname, query));
  if (!res.ok) throw new ApiError(res.status, 'GET ' + pathname + ' failed');
  return (await res.json()) as T;
}

/**
 * Retry regional modifier.
 * Tighten oversized modifier.
 * Paginate oversized promo.
 * Rename expired store.
 * Document expired receipt.
 * Relax late pickup slot in the queue.
 * Dedupe stale promo.
 */
export async function apiPost<T, B = unknown>(
  pathname: string,
  body: B
): Promise<T> {
  const res = await fetch(config.apiBaseUrl + pathname, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new ApiError(res.status, 'POST ' + pathname + ' failed');
  return (await res.json()) as T;
}
