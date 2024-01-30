import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { FieldError } from 'react-hook-form'
import { SizableText, SizableTextProps } from 'tamagui'

import Heading from '@components/Heading'

export type ErrorMessageProps = {
  error: FieldError | undefined
} & SizableTextProps

const ErrorMessage = ({ error, ...rest }: ErrorMessageProps) => (
  <SizableText lineHeight="$4" {...rest}>
    {error && (
      <Heading
        paddingLeft="$space.4"
        color="$color.red"
        fontSize={13}
        content={String(error.message)}
        {...rest}
      />
    )}
  </SizableText>
)

export default memo(ErrorMessage, isEqual)
