import { styled } from 'tamagui'

import { Text } from '../Text'

const ReadMoreText = styled(Text, {
  tag: 'span',
  hitSlop: 5,
  color: '$blue_200',
  hoverStyle: {
    cursor: 'pointer',
  },
})

export default ReadMoreText
