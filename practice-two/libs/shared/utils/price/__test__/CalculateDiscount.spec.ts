import calculateDiscount from '../index'

describe('Testing function calculate percent', () => {
  it('Function must return right value', () => {
    expect(calculateDiscount(123, 12)).toBe('90% off')
    expect(calculateDiscount(100, 20)).toBe('80% off')
  })

  it('Function return an empty string if second param is not given', () => {
    expect(calculateDiscount(123)).toBe('')
  })
})
