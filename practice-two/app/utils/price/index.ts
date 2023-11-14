const calculateDiscount = (price: number, discountPrice?: number): string => {
  if (!discountPrice) return ''
  return `${(100 - (discountPrice / price) * 100).toFixed()}% off`
}

export default calculateDiscount
