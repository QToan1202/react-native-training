import { Text as NativeText, TextStyle } from 'react-native'
import styles from './styles'

export interface TextProps {
  content: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  style?: TextStyle | TextStyle[]
}

const Text = ({ content, size = 'sm', style = {} }: TextProps) => {
  return <NativeText style={[styles.text, styles[size], style]}>{content}</NativeText>
}

export default Text
