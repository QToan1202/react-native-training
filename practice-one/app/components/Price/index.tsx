import { View, ViewProps } from 'react-native'

import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import { containerStyles } from '@styles'
import { IDetailInfo } from '@types'

import styles from './styles'

export interface PriceProps extends ViewProps {
  data: IDetailInfo[]
  total: number
  header?: string
  footer?: string
}

const Price = ({
  data,
  total,
  header = 'price details',
  footer = 'total amount',
  style,
  ...rest
}: PriceProps) => {
  return (
    <View style={[styles.detailWrapper, style]} {...rest}>
      <Heading style={[styles.text, styles.title]} content={header} />
      <View style={[containerStyles.inline, containerStyles.spaceBetween]}>
        <View style={styles.spacing}>
          {data.map(({ id, label }) => (
            <Paragraph key={id} style={styles.text} content={label} />
          ))}
        </View>
        <View style={[styles.spacing, styles.align]}>
          {data.map(({ id, value }) => (
            <Paragraph key={id} style={styles.text} content={value} />
          ))}
        </View>
      </View>
      <View style={styles.line} />
      <View style={[containerStyles.inline, containerStyles.spaceBetween]}>
        <Heading style={[styles.text, styles.title]} content={footer} />
        <Heading style={[styles.text, styles.title, styles.bold]} content={`$${total}`} />
      </View>
    </View>
  )
}

export default Price
