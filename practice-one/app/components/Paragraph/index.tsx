import { Text, TextProps, TextStyle } from 'react-native'
import styles from './styles'

export interface ParagraphProps extends TextProps {
  content: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  style?: TextStyle | TextStyle[]
}

const Paragraph = ({ content, size = 'sm', style = {}, ...rest }: ParagraphProps) => {
  return (
    <Text style={[styles.text, styles[size], style]} {...rest}>
      {content}
    </Text>
  )
}

export default Paragraph
