import { ImageURISource } from 'react-native'
import { Card, CardProps, Heading, getTokenValue } from 'tamagui'

import { Image } from '../Image'

export type CategoryItemProps = CardProps & {
  title: string
  image: ImageURISource['uri']
}

export const CategoryItem = ({ title, image, ...rest }: CategoryItemProps) => {
  return (
    <Card
      maxWidth={getTokenValue('$categoryMobile.width')}
      maxHeight={getTokenValue('$categoryMobile.height')}
      borderRadius={50}
      hoverStyle={{
        cursor: 'pointer',
      }}
      {...rest}
    >
      <Image
        borderRadius={50}
        source={{
          width: getTokenValue('$categoryMobile.width'),
          height: getTokenValue('$categoryMobile.height'),
          uri: image,
        }}
      />
      <Card.Footer justifyContent="center" paddingVertical={10}>
        <Heading ellipse color="$pure_black" textTransform="capitalize">
          {title}
        </Heading>
      </Card.Footer>
    </Card>
  )
}

export default CategoryItem
