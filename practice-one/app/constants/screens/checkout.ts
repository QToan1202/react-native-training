import { PaymentCardProps } from '@components/PaymentCard'
import { IDetailInfo, IFlatListBase } from '@types'

const PRICE_DETAILS: IDetailInfo[] = [
  { id: 1, label: 'price (1 item)', value: '$25' },
  { id: 2, label: 'delivery fee', value: 'info' },
]

export interface ICardItem extends IFlatListBase, Omit<PaymentCardProps, 'id'> {
  name: string
}

const CARDS: ICardItem[] = [
  {
    id: '1',
    name: 'Tradly Team',
    cardNumber: '5627215898548869',
    cvc: 111,
    expires: '01/2019',
  },
]

export default { PRICE_DETAILS, CARDS }
