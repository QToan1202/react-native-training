import { useMemo } from 'react'
import { ListItem, YGroup, GroupProps } from 'tamagui'

import { Text } from '@practice-three/components'
import { convertQueryStr } from '@practice-three/utils'

import { SORT_OPTIONS, TSortOption } from '../../constants'
import { useLocation, useSearchParams } from 'react-router-dom'

export type SortModalProps = GroupProps

const DEFAULT_SEARCH_PARAMS = {}

const SortModal = (props: SortModalProps) => {
  const { search } = useLocation()
  const parseSearchParams = useMemo(() => convertQueryStr(search), [search])
  const [, setSearchParams] = useSearchParams(DEFAULT_SEARCH_PARAMS)
  const renderDropdownModal = useMemo(
    () =>
      SORT_OPTIONS.map(({ label, path }: TSortOption) => (
        <YGroup.Item key={label}>
          <ListItem
            backgroundColor="$white"
            cursor="pointer"
            onPress={() => setSearchParams(path)}
            hoverStyle={{ backgroundColor: '$gray_50' }}
          >
            <Text
              {...(Object.keys(parseSearchParams).length === 1 && label === 'Popularity'
                ? { fontWeight: 'bold' }
                : { fontWeight: 'normal' })}
              {...(parseSearchParams?._order?.[path?._order] && { fontWeight: 'bold' })}
            >
              {label}
            </Text>
          </ListItem>
        </YGroup.Item>
      )),
    [parseSearchParams, setSearchParams]
  )

  return (
    <YGroup position="absolute" zIndex="$1" top={40} right={40} {...props}>
      {renderDropdownModal}
    </YGroup>
  )
}

export default SortModal
