import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Image, View, ViewProps } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PagerView, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view'
import { StatusBar } from 'expo-status-bar'

import { Button, Paragraph } from '@components'
import { containerStyles } from '@styles'
import { COLORS, ONBOARDING_VIEW_DATA } from '@constants'
import { IOnboardingScreenView } from '@types'

import styles from './styles'

export interface OnboardingProps extends ViewProps {}

const Onboarding = ({ style, ...rest }: OnboardingProps) => {
  const pagerView = useRef<PagerView>(null)
  const numOfPagerView = useRef<number>(ONBOARDING_VIEW_DATA.length - 1)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const handleMoveToNextScreen = useCallback(() => {
    setCurrentPage((prevState) =>
      prevState !== numOfPagerView.current ? prevState + 1 : prevState
    )
  }, [])
  const handlePageSelected = (e: PagerViewOnPageSelectedEvent) => {
    setCurrentPage(e.nativeEvent.position)
  }
  const renderViewPagerChildren: React.JSX.Element[] = useMemo(
    () =>
      ONBOARDING_VIEW_DATA.map(({ id, img, title }: IOnboardingScreenView) => (
        <View style={styles.page} key={id}>
          <View style={styles.imgContainer}>
            <Image source={img} />
          </View>
          <Paragraph style={styles.title} size="xl" content={title} />
        </View>
      )),
    []
  )
  const renderPagerIndex: React.JSX.Element[] = useMemo(() => {
    const listIndex: React.JSX.Element[] = []
    for (let i = 0; i <= numOfPagerView.current; i += 1) {
      listIndex.push(
        <View key={i} style={[styles.dot, currentPage === i ? styles.active : styles.normal]} />
      )
    }

    return listIndex
  }, [currentPage])

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
        {renderViewPagerChildren}
      </PagerView>
      <View style={styles.dotGroup}>{renderPagerIndex}</View>
      <Button
        style={styles.btn}
        title={numOfPagerView.current === currentPage ? 'finish' : 'next'}
        onPress={handleMoveToNextScreen}
      />
    </SafeAreaView>
  )
}

export default Onboarding
