import { FieldPath, UseControllerProps } from 'react-hook-form'

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

  return result
}

/**
 * Converts a query string into a nested object where each key is mapped to another object.
 * The nested object contains the query parameters' values as keys and `true` as their values.
 *
 * @param {string} query - The query string to convert. Example: "?foo=1&bar=2&foo=3&foo.bar=4"
 *
 * @returns {Record<string, Record<string, boolean>>} - An object where each query parameter key maps to another object which maps the parameter values to `true`.
 *
 * @example
 *  ```ts
 *  const queryString = "?foo=1&bar=2&foo=3&foo.bar=4";
 *  const result = convertQueryStr(queryString);
 *  console.log(result); // Output: { foo: {'1': true, '3': true}, bar: {'2': true, '4': true} }
 *  ```
 */
export const convertQueryStr = (query: string) => {
  const transform = query.replace('?', '').split('&')
  const result: Record<string, Record<string, boolean>> = {}

  transform.forEach((item) => {
    const [key, value] = item.split('=')
    const convertKey = key.includes('.') ? (key.split('.').pop() as string) : key
    if (!result[convertKey]) result[convertKey] = {}

    result[convertKey][convertToLowerStr(value)] = true
  })

  return result
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TResolveLoaderReturn<T extends (...args: any) => any> = Awaited<
  ReturnType<ReturnType<T>>
>

/**
 * Type to convert a string from camelCase to a delimited case (e.g., snake_case).
 *
 * @template S - The input string type to convert.
 * @template Delimiter - The delimiter to insert before uppercase letters.
 *
 * ```ts
 * type SnakeCaseString = TDelimiterCase<'thisIsCamelCase', '_'>;  // 'this_is_camel_case'
 * type KebabCaseString = TDelimiterCase<'thisIsCamelCase', '-'>;  // 'this-is-camel-case'
 * ```
 */
export type TDelimiterCase<
  S extends string,
  Delimiter extends string
> = S extends `${infer T}${infer U}`
  ? `${T extends Lowercase<T> ? '' : Delimiter}${Lowercase<T>}${TDelimiterCase<U, Delimiter>}`
  : S

export type TTransformFields<
  T extends Record<string, string>,
  ExtraProps = NonNullable<unknown>
> = {
  [K in keyof T as Uppercase<TDelimiterCase<K & string, '_'> & string>]: {
    label: keyof T
    title: string
    rules?: UseControllerProps<T, FieldPath<T>>['rules']
  } & ExtraProps
}
