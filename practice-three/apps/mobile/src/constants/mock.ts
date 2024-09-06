import {
  Category,
  DealBottom,
  DealDress,
  DealMen,
  DealWoman,
  Kids,
  Men,
  Offer,
  OfferHMLogo,
  Western,
  Women,
} from '../assets/images'

export const CATEGORY_DATA = [
  { title: 'Categories', image: Category },
  { title: 'Men', image: Men },
  { title: 'Women', image: Women },
  { title: 'Kids', image: Kids },
  { title: 'Western wear', image: Western },
]

export const DEAL_DATA = [
  { preTitle: 'tops', title: 'Under Rs. 799', image: DealMen },
  { preTitle: 'tops', title: 'Under Rs. 799', image: DealBottom },
  { preTitle: 'tops', title: 'Under Rs. 799', image: DealWoman },
  { preTitle: 'tops', title: 'Under Rs. 799', image: DealDress },
]

export const TRENDING_DATA = [
  { title: 'Min 30% Off', image: Offer, brandImage: OfferHMLogo },
  { title: 'Min 30% Off', image: Offer, brandImage: OfferHMLogo },
  { title: 'Min 30% Off', image: Offer, brandImage: OfferHMLogo },
]
