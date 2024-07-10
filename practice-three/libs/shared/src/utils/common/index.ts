export const convertToLowerStr = (str: string | number, locales: Intl.LocalesArgument = 'en-US') =>
  String(str).toLocaleLowerCase(locales)

/**
 * Filters the keys of an object based on a specified resolved value.
 *
 * @param {Record<string, unknown>} object - The object containing key-value pairs to be evaluated.
 * @param {string[]} keys - An array of keys to be checked in the object.
 * @param {unknown} resolvedValue - The value to be matched against the object's values.
 *
 * @returns {string[]} - An array of keys whose corresponding values in the object match the resolved value.
 *
 * @example
 *  ```ts
 *  const data = { a: 1, b: 2, c: 1 };
 *  const keysToCheck = ['a', 'b', 'c'];
 *  const valueToMatch = 1;
 *  const result = resolveValues(data, keysToCheck, valueToMatch);
 *  console.log(result); // Output: ['a', 'c']
 *  ```
 */
export const resolveValues = (
  object: Record<string, unknown>,
  keys: string[],
  resolvedValue: unknown
): string[] => keys.filter((item: string) => object[convertToLowerStr(item)] === resolvedValue)

/**
 * Parses URL search parameters into an object with arrays of values.
 *
 * @param {URLSearchParams | string} params - The URLSearchParams object or query string to be parsed.
 *
 * @returns {Record<string, unknown[]>} - An object where each key is a parameter name and each value is an array of values associated with that parameter.
 *
 * @example
 *  ```ts
 *  const queryString = "foo=1&bar=2&foo=3";
 *  const result = parseURLSearchParams(queryString);
 *  console.log(result); // Output: { foo: ['1', '3'], bar: ['2'] }
 *
 *  const urlParams = new URLSearchParams(queryString);
 *  const result = parseURLSearchParams(urlParams);
 *  console.log(result); // Output: { foo: ['1', '3'], bar: ['2'] }
 *  ```
 */
export const parseURLSearchParams = (
  params: URLSearchParams | string
): Record<string, unknown[]> => {
  const entries = new URLSearchParams(params).entries()
  const result: Record<string, Array<unknown>> = {}

  for (const [key, value] of entries) {
    if (!result[key]) result[key] = []

    result[key].push(value)
  }

  return final
}
