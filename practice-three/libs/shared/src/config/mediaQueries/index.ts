import { createMedia } from 'tamagui'

const mediaQueries = createMedia({
  xs: { minWidth: 414 + 1 },
  sm: { minWidth: 768 + 1 },
  md: { minWidth: 992 + 1 },
  lg: { minWidth: 1200 + 1 },
  xl: { minWidth: 1400 + 1 },
})

export default mediaQueries
