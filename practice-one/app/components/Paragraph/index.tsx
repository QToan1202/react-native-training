import { Text, TextStyle } from 'react-native'
import styles from './styles'

export interface ParagraphProps {
  content: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  style?: TextStyle | TextStyle[]
}

const Paragraph = ({ content, size = 'sm', style = {} }: ParagraphProps) => {
  return <Text style={[styles.text, styles[size], style]}>{content}</Text>
}

export default Paragraph
