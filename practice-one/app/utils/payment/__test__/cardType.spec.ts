import checkCardType from '../index'

const masterCard: string = '5512'
const visaCard: string = '4321'
const normalCard: string = '3412'

describe('Testing function check card type', () => {
  it('Function must return right value', () => {
    expect(checkCardType(masterCard)).toBe('mastercard')
    expect(checkCardType(visaCard)).toBe('visa')
    expect(checkCardType(normalCard)).toBe('normal')
  })
})
