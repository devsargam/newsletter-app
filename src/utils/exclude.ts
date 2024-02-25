type ExcludeKeys<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export function exclude<T, K extends keyof T>(
  obj: T,
  keysToExclude: K[],
): ExcludeKeys<T, K> {
  const result = { ...obj };
  keysToExclude.forEach((key) => delete result[key]);
  return result;
}
