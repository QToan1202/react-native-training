import { TextProps, View } from 'react-native'
import { FieldError } from 'react-hook-form'

import Heading from '@components/Heading'

import styles from './styles'

export interface ErrorMessageProps extends TextProps {
  error: FieldError | undefined
}

const ErrorMessage = ({ error, style, ...rest }: ErrorMessageProps) => (
  <View style={styles.errorWrapper}>
    {error && <Heading style={[styles.error, style]} content={String(error.message)} {...rest} />}
  </View>
)

export default ErrorMessage
