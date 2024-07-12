import { ReactNode, useMemo, useState } from 'react'

import { Text, TextProps } from '../Text'
import ReadMoreText from './ReadMoreText'

export type ReadMoreProps = TextProps & {
  children: ReactNode
  maxLength?: number
}

export const ReadMore = ({ maxLength = 50, children, ...rest }: ReadMoreProps) => {
  const [isExpand, setIsExpand] = useState<boolean>(false)
  const toggleReadMore = () => setIsExpand((prevState) => !prevState)
  const convertString = useMemo(() => {
    if (typeof children === 'string' || typeof children === 'number') {
      return String(children).split(/\s+/).slice(0, maxLength).join(' ')
    }

    return children
  }, [children, maxLength])

  return (
    <Text {...rest}>
      {isExpand ? children : convertString}
      {String(children).split(' ').length > maxLength ? (
        !isExpand ? (
          <ReadMoreText onPress={toggleReadMore} {...rest}>
            Read more
          </ReadMoreText>
        ) : (
          <ReadMoreText onPress={toggleReadMore} {...rest}>
            See less
          </ReadMoreText>
        )
      ) : null}
    </Text>
  )
}

export default ReadMore
