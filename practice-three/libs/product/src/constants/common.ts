import { TProductSpecification } from '@practice-three/shared/types'

export const CLOTH_CATEGORIES = [
  'shirt',
  'work attire',
  't-shirt',
  'pants',
  'shoes',
  'accessories',
  'dress',
  'skirt',
  'bag',
  'lingerie',
  'underwear',
]

export const TYPES = ['male', 'female', 'unisex', 'teen', 'baby']

export const FILTER_LABELS = ['brand', 'color', 'discount range']

type TLabels = Record<keyof TProductSpecification, string>

export const PRODUCT_SPECIFICATIONS_LABELS: TLabels = {
  sleeveLength: 'Sleeve Length',
  patternType: 'Print or Pattern Type',
  length: 'Length',
  liningFabric: 'Lining Fabric',
  hemline: 'Hemline',
  type: 'Type',
  color: 'Color',
  closure: 'Closure',
  numOfPockets: 'Number of Pockets',
  occasion: 'Occasion',
}

export const PRODUCT_LABELS = [
  'product details',
  'specification',
  'ratings & reviews',
  'how this was made',
  'manufacturing information',
]

export type TSortOption = {
  label: string
  path: Record<string, string>
}
export const SORT_OPTIONS: TSortOption[] = [
  {
    label: 'Popularity',
    path: {},
  },
  { label: 'Price - Low to High', path: { _sort: 'price', _order: 'asc' } },
  { label: 'Price - High to Low', path: { _sort: 'price', _order: 'desc' } },
  { label: 'Newest', path: {} },
]
