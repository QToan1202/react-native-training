import { Text, TextProps, TextStyle } from 'react-native'

import styles from './styles'

export interface HeadingProps extends TextProps {
  content: string
  textMedium?: boolean
  style?: TextStyle | TextStyle[]
}

const Heading = ({ content, textMedium = false, style = {}, ...rest }: HeadingProps) => {
  return (
    <Text style={[styles.heading_bold, textMedium && styles.heading_medium, style]} {...rest}>
      {content}
    </Text>
  )
}

export default Heading
