import { Input, InputProps } from '@shared/components'
import { TSearchField } from '@shared/types'

import { Search as SearchIcon } from '../../assets/images'

export type SearchProps = InputProps<TSearchField>

const Search = ({ containerStyle, ...rest }: SearchProps) => (
  <Input
    endIcon={<SearchIcon />}
    padding={14}
    placeholder="Search here"
    placeholderTextColor="$gray_100"
    containerStyle={{
      borderRadius: 8,
      backgroundColor: '$gray_50',
      ...containerStyle,
    }}
    {...rest}
    label="search"
  />
)

export default Search
