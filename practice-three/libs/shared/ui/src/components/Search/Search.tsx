import { Search as SearchIcon } from '@practice-three/shared/asset'

import { Input, InputProps } from '../Input'

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
