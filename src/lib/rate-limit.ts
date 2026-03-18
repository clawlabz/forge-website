const WINDOW_MS = 60_000; // 60 seconds
const MAX_REQUESTS = 20;

const ipMap = new Map<string, number[]>();

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipMap.get(ip) ?? [];

  // Remove entries outside the sliding window
  const valid = timestamps.filter((t) => now - t < WINDOW_MS);

  if (valid.length >= MAX_REQUESTS) {
    ipMap.set(ip, valid);
    return false; // rate limited
  }

  valid.push(now);
  ipMap.set(ip, valid);

  // Periodic cleanup: remove stale IPs every 100 calls
  if (ipMap.size > 1000) {
    for (const [key, vals] of ipMap) {
      const fresh = vals.filter((t) => now - t < WINDOW_MS);
      if (fresh.length === 0) {
        ipMap.delete(key);
      } else {
        ipMap.set(key, fresh);
      }
    }
  }

  return true; // allowed
}
