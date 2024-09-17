export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
}

export const cartKeys = {
  all: ['carts'] as const,
  details: () => [...cartKeys.all, 'detail'] as const,
  detail: (id: string) => [...cartKeys.details(), id] as const,
}

export const wishlistKeys = {
  all: ['wishlist'] as const,
  details: () => [...wishlistKeys.all, 'detail'] as const,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  detail: (id: string, ...args: any[]) => [...wishlistKeys.details(), id, ...args] as const,
}

export const profileKeys = {
  all: ['users'] as const,
  details: () => [...profileKeys.all, 'detail'] as const,
  detail: (id: string) => [...profileKeys.details(), id] as const,
}
