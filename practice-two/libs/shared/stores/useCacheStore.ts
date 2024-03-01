import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { IProduct, IStore, IWishlistBase } from '@practice-two/shared'

interface CacheState {
  isHydrated: boolean
  products: IProduct[]
  wishlist: IWishlistBase[]
  stores: IStore[]
}

interface CacheActions {
  setIsHydrated: (isHydratedState: boolean) => void
  setProducts: (products: IProduct[]) => void
  setWishlist: (items: IWishlistBase[]) => void
  setStores: (items: IStore[]) => void
}

const initState: CacheState = {
  isHydrated: false,
  products: [],
  wishlist: [],
  stores: [],
}

export const useCacheStore = create<CacheState & CacheActions>()(
  persist(
    (set) => ({
      ...initState,
      setIsHydrated: (isHydratedState: boolean) => set({ isHydrated: isHydratedState }),
      setProducts: (products: IProduct[]) => set(() => ({ products: products.slice(0, 5) })),
      setWishlist: (items: IWishlistBase[]) => set(() => ({ wishlist: items.slice(0, 5) })),
      setStores: (items: IStore[]) => set(() => ({ stores: items.slice(0, 5) })),
    }),
    {
      name: 'cache.storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state: (CacheState & CacheActions) | undefined) => {
        state?.setIsHydrated(true)
      },
    }
  )
)

export default useCacheStore
