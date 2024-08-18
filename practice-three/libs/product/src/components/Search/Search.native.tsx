import { Input, InputProps } from '@shared/components'
import { TSearchField } from '@shared/types'

import { SearchMobile } from '../../assets/images'

export type SearchProps = InputProps<TSearchField>

const Search = ({ ...rest }: SearchProps) => (
  <Input
    startIcon={<SearchMobile />}
    padding={13}
    placeholder="Search..."
    placeholderTextColor="$gray_400"
    containerStyle={{
      borderRadius: 15,
      backgroundColor: '#f2f3f2',
    }}
    {...rest}
    label="search"
  />
)

export default Search
