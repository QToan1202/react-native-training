import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query'

import { edit } from '@practice-three/shared/service'
import { TCart } from '@practice-three/shared/types'

import { cartKeys } from '../../factories'

type TMutationDFn = TCart

const useClearCartItem = (
  path: string,
  userId: string
): UseMutationResult<TCart, Error, TMutationDFn, unknown> => {
  const queryClient = useQueryClient()

  return useMutation<TCart, Error, TMutationDFn, unknown>({
    mutationFn: (cartData: TMutationDFn): Promise<TCart> => {
      const { id, userId } = cartData

      return edit<TCart>(path, id, {
        userId,
        items: {},
      })
    },
    onSuccess: (data: TCart) => {
      /**
       * Set the new cache data MUST BE in array
       * since the [query key] ['carts', userId] control carts data return ARRAY of carts
       */
      queryClient.setQueryData(cartKeys.detail(userId), (oldData: TCart[]) =>
        data ? [data] : oldData
      )
    },
  })
}

export default useClearCartItem
