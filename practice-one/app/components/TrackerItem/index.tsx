import { memo } from 'react'
import isEqual from 'react-fast-compare'
import { View, ViewProps } from 'react-native'

import Paragraph from '@components/Paragraph'
import { TTrackerStatus } from '@types'
import { containerStyles } from '@styles'
import styles from './styles'

export interface TrackerItemProps extends ViewProps {
  trackStatus: TTrackerStatus
  description: string
  date: Date
  time: string
}

const TrackerItem = ({
  trackStatus,
  description,
  date,
  time,
  style,
  ...rest
}: TrackerItemProps) => {
  return (
    <View style={[styles.container, style]} {...rest}>
      <View style={[containerStyles.inline, containerStyles.spaceBetween]}>
        <Paragraph content={trackStatus} style={[styles.text, styles.title]} />
        <Paragraph content={date.toLocaleDateString('en-GB')} style={styles.text} />
      </View>
      <View style={[containerStyles.inline, containerStyles.spaceBetween]}>
        <Paragraph content={description} style={styles.text} />
        <Paragraph content={time} style={styles.text} />
      </View>
    </View>
  )
}

export default memo(TrackerItem, isEqual)
