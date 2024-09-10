import { isWeb } from 'tamagui'

const styles = isWeb ? await import('./ImageGallery.module.css') : null

export default styles
