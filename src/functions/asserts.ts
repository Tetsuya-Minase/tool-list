function isString(v: unknown): v is string {
  return typeof v === 'string';
}
function isNumber(v: unknown): v is number {
  return typeof v === 'number';
}
function isObject(v: unknown): v is object {
  return typeof v === 'object';
}
function isKeyValueObject(v: object, requiredKeys: string[]): v is Record<string, unknown> {
  return requiredKeys.every((key) => v.hasOwnProperty(key));
}

export function assertString(v: unknown): asserts v is string {
  if (!isString(v)) {
    throw new TypeError(`${v} must be a string.`);
  }
}
export function assertNumber(v: unknown): asserts v is number {
  if (!isNumber(v)) {
    throw new TypeError(`${v} must be a number.`);
  }
}
export function assertObject(v: unknown): asserts v is object {
  if (!isObject(v)) {
    throw new TypeError(`${v} must be a object.`);
  }
}
export function assertKeyValueObject<K extends string>(v: unknown, requiredKeys: K[]): asserts v is Record<K, unknown> {
  if (!isObject(v) || !isKeyValueObject(v, requiredKeys)) {
    throw new TypeError(`${v} must be a key-value object.`);
  }
}
