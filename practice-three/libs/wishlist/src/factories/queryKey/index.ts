export const wishlistKeys = {
  all: ['wishlist'] as const,
  lists: () => [...wishlistKeys.all, 'list'] as const,
  details: () => [...wishlistKeys.all, 'detail'] as const,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  detail: (id: string, ...args: any[]) => [...wishlistKeys.details(), id, ...args] as const,
}
