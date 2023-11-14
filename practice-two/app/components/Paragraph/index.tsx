import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { StyleProp, Text, TextProps, TextStyle } from 'react-native'

import { TSize } from '@types'

import styles from './styles'

export interface ParagraphProps extends TextProps {
  content: string
  size?: TSize
  style?: StyleProp<TextStyle>
}

const Paragraph = ({ content, size = 'sm', style, ...rest }: ParagraphProps) => {
  return (
    <Text style={[styles.text, styles[size], style]} {...rest}>
      {content}
    </Text>
  )
}

export default memo(Paragraph, isEqual)