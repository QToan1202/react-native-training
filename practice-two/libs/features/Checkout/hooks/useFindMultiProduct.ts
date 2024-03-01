import { UseQueryResult, useQueries } from '@tanstack/react-query'

import { find, ICart, IProduct } from '@practice-two/shared'

const useFindMultiProduct = (
  path: string,
  productId: number[],
  quantity: number[]
): Partial<ICart>[] => {
  const queryFindFn = (id: string) =>
    find<IProduct>(`${path}/${id}`, {
      params: {
        _expand: ['store', 'category'],
      },
    })

  const productQueries = useQueries<IProduct[], Array<UseQueryResult<IProduct, Error>>>({
    queries: productId.map((id) => ({
      queryKey: ['orders', id],
      queryFn: () => queryFindFn(String(id)),
    })),
  })

  const cartItems: Partial<ICart>[] = productQueries.map(
    ({ data, isSuccess }: UseQueryResult<IProduct, Error>, index: number) => {
      if (!isSuccess) return {}
      const { id, img, name, price, discountPrice }: IProduct = data

      return { id, img, name, price, discountPrice, quantity: quantity[index] }
    }
  )

  return cartItems
}

export default useFindMultiProduct
