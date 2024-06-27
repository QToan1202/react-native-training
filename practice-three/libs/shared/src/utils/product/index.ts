const calculateDiscountPrice = (originalPrice: number, discountPercent: number) =>
  Math.round(originalPrice * (1 - discountPercent / 100))

export default calculateDiscountPrice
