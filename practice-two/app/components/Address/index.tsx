import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { View, ViewProps } from 'react-native'

import Button from '@components/Button'
import Paragraph from '@components/Paragraph'
import { containerStyles } from '@styles'

import styles from './styles'

export interface AddressProps extends ViewProps {
  name: string
  streetAddress: string
  onPress: () => void
}

const Address = ({ name, streetAddress, style, onPress, ...rest }: AddressProps) => {
  return (
    <View
      style={[containerStyles.inline, containerStyles.spaceBetween, styles.container, style]}
      {...rest}
    >
      <View style={styles.spacing}>
        <Paragraph style={styles.text} content={name} />
        <Paragraph style={[styles.text, styles.address]} content={streetAddress} />
      </View>
      <Button style={styles.btn} titleStyle={styles.btnTitle} title="change" onPress={onPress} />
    </View>
  )
}

export default memo(Address, isEqual)
