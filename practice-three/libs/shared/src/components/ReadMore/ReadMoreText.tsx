import { styled } from 'tamagui'

import { Text } from '../Text'

const ReadMoreText = styled(Text, {
  tag: 'span',
  paddingHorizontal: 5,
  color: '$blue_100',
  hoverStyle: {
    cursor: 'pointer',
  },
})

export default ReadMoreText
