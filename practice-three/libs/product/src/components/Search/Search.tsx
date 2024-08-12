import { Input, InputProps } from '@shared/components'

import { Search as SearchIcon } from '../../assets/images'

export type SearchProps = InputProps

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
  />
)

export default Search
