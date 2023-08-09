import { Text, TextStyle } from 'react-native'

import styles from './styles'

export interface HeadingProps {
  content: string
  textMedium?: boolean
  style?: TextStyle | TextStyle[]
}

const Heading = ({ content, textMedium = false, style = {} }: HeadingProps) => {
  return (
    <Text style={[styles.heading_bold, textMedium && styles.heading_medium, style]}>{content}</Text>
  )
}

export default Heading
