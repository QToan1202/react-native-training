import { TProduct } from '../../types'

export const calculateDiscountPrice = (originalPrice: number, discountPercent: number) =>
  Math.round(originalPrice * (1 - discountPercent / 100))

export const getMinMaxPrices = (data: TProduct[]): [number, number] => {
  const arrPrices: number[] = data.map((item: TProduct) => item?.price || 0)

  return [Math.min(...arrPrices), Math.max(...arrPrices)]
}

export const getBrands = (data: TProduct[]): string[] => {
  const arrOfBrands: string[] = data.map((item: TProduct) => item?.brandName || '')

  return arrOfBrands
}

export const getColors = (data: TProduct[]): string[] => {
  const arrOfColors: string[] = data.map((item: TProduct) => item?.specifications?.color || '')

  return arrOfColors
}

export const getDiscounts = (data: TProduct[]): number[] => {
  const arrOfDiscounts: number[] = data.map((item: TProduct) => item?.discountPercent || 0)

  return arrOfDiscounts
}
