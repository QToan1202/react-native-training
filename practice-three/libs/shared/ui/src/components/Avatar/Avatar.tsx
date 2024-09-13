import { Avatar as TAvatar, AvatarProps as TAvatarProps } from 'tamagui'

import { placeholderImagePath } from '@practice-three/shared/asset'

export type AvatarProps = TAvatarProps & {
  image: string
}

const Avatar = ({ image = placeholderImagePath, ...rest }: AvatarProps) => (
  <TAvatar size={(typeof rest.width === 'number' && rest.width) || 60} {...rest}>
    <TAvatar.Image source={{ uri: image }} />
    <TAvatar.Fallback backgroundColor="$pale" />
  </TAvatar>
)

export default Avatar
