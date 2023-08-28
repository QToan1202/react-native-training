import { LayoutAnimation, LayoutAnimationConfig } from 'react-native'

export const toggleAnimation: LayoutAnimationConfig = {
  duration: 300,
  create: {
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.easeInEaseOut,
  },
  update: {
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.easeInEaseOut,
  },
  delete: {
    duration: 200,
    property: LayoutAnimation.Properties.opacity,
    type: LayoutAnimation.Types.easeInEaseOut,
  },
}

export default toggleAnimation
