import { Input, InputProps } from '../Input'
import { SearchMobile } from '../../assets/images'

export type SearchProps = InputProps

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
  />
)

export default Search
