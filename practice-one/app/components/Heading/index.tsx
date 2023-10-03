import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { Text, TextProps } from 'react-native'

import styles from './styles'

export interface HeadingProps extends TextProps {
  content: string
  textMedium?: boolean
}

const Heading = ({ content, textMedium = false, style, ...rest }: HeadingProps) => {
  return (
    <Text style={[styles.heading_bold, textMedium && styles.heading_medium, style]} {...rest}>
      {content}
    </Text>
  )
}

export default memo(Heading, isEqual)
