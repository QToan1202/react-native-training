import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { IProduct, IStore, IWishlistBase } from '@types'

interface CacheState {
  isHydrated: boolean
  setIsHydrated: (isHydratedState: boolean) => void
  products: IProduct[]
  setProducts: (products: IProduct[]) => void
  wishlist: IWishlistBase[]
  setWishlist: (items: IWishlistBase[]) => void
  stores: IStore[]
  setStores: (items: IStore[]) => void
}

export const useCacheStore = create<CacheState>()(
  persist(
    (set) => ({
      isHydrated: false,
      setIsHydrated: (isHydratedState: boolean) => set({ isHydrated: isHydratedState }),

      products: [],
      setProducts: (products: IProduct[]) => set(() => ({ products: products.slice(0, 5) })),

      wishlist: [],
      setWishlist: (items: IWishlistBase[]) => set(() => ({ wishlist: items.slice(0, 5) })),

      stores: [],
      setStores: (items: IStore[]) => set(() => ({ stores: items.slice(0, 5) })),
    }),
    {
      name: 'cache.storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state: CacheState | undefined) => {
        state?.setIsHydrated(true)
      },
    }
  )
)

export default useCacheStore
