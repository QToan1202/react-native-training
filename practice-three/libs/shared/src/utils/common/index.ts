export const convertToLowerStr = (str: string | number, locales: Intl.LocalesArgument = 'en-US') =>
  String(str).toLocaleLowerCase(locales)

export const resolveValues = (
  object: Record<string, boolean>,
  keys: string[],
  resolvedValue: unknown
) => keys.filter((item: string) => object[convertToLowerStr(item)] === resolvedValue)

export const parseURLSearchParams = (params: URLSearchParams): Record<string, unknown[]> => {
  const firstPhase = params.entries()
  const final: Record<string, Array<unknown>> = {}
  for (const [key, value] of firstPhase) {
    if (!final[key]) final[key] = []

    final[key].push(value)
  }

  return final
}
