import { isWeb } from 'tamagui'

const styles = isWeb ? require('./ImageGallery.module.css') : null

export default styles
