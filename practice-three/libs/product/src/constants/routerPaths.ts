export const ROUTER_PATHS = {
  SEARCH: 'search',
  PRODUCT_DETAIL: {
    STATIC: 'product/:id',
    DYNAMIC: (id: string) => `/product/${id}`,
  },
  WISHLIST: 'wishlist',
}
