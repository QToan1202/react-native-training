import { useCallback, useEffect, useRef, useState } from 'react'
import { Image, View, ViewProps } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PagerView, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view'
import { StatusBar } from 'expo-status-bar'

import { Button, Paragraph } from '@components'
import { containerStyles } from '@styles'
import { COLORS } from '@constants'

import styles from './styles'

export interface OnboardingProps extends ViewProps {}

const Onboarding = ({ style, ...rest }: OnboardingProps) => {
  const pagerView = useRef<PagerView>(null)
  const numOfPagerView = useRef<number>(2)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const handleMoveToNextScreen = useCallback(() => {
    setCurrentPage((prevState) =>
      prevState !== numOfPagerView.current ? prevState + 1 : prevState
    )
  }, [])
  const handlePageSelected = (e: PagerViewOnPageSelectedEvent) => {
    setCurrentPage(e.nativeEvent.position)
  }

  useEffect(() => {
    pagerView.current?.setPage(currentPage)
  }, [currentPage])

  return (
    <SafeAreaView style={[containerStyles.expand, styles.container, style]} {...rest}>
      <StatusBar style="light" backgroundColor={COLORS.PRIMARY} />
      <View style={styles.bgContainer} />
      <PagerView
        initialPage={currentPage}
        onPageSelected={handlePageSelected}
        ref={pagerView}
        style={containerStyles.expand}
      >
        <View style={styles.page} key={0}>
          <View style={styles.imgContainer}>
            <Image source={require('@assets/onboarding/onboarding-1.png')} />
          </View>
          <Paragraph
            style={styles.title}
            size="xl"
            content="Empowering Artisans, Farmers & Micro Business"
          />
        </View>
        <View style={styles.page} key={1}>
          <View style={styles.imgContainer}>
            <Image source={require('@assets/onboarding/onboarding-2.png')} />
          </View>
          <Paragraph
            style={styles.title}
            size="xl"
            content="Connecting NGOs, Social Enterprises with Communities"
          />
        </View>
        <View style={styles.page} key={2}>
          <View style={styles.imgContainer}>
            <Image source={require('@assets/onboarding/onboarding-3.png')} />
          </View>
          <Paragraph
            style={styles.title}
            size="xl"
            content=" Donate, Invest & Support infrastructure projects"
          />
        </View>
      </PagerView>
      <View style={styles.dotGroup}>
        <View style={[styles.dot, currentPage === 0 ? styles.active : styles.normal]} />
        <View style={[styles.dot, currentPage === 1 ? styles.active : styles.normal]} />
        <View style={[styles.dot, currentPage === 2 ? styles.active : styles.normal]} />
      </View>
      <Button
        style={styles.btn}
        title={numOfPagerView.current === currentPage ? 'finish' : 'next'}
        onPress={handleMoveToNextScreen}
      />
    </SafeAreaView>
  )
}

export default Onboarding
