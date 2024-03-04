import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PagerView, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { XStack } from 'tamagui'

import {
  Button,
  Paragraph,
  containerStyles,
  IOnboardingScreenView,
  Feature,
} from '@practice-two/shared'
import { RootStackParamList } from 'libs/shared/navigation/Stack'
import { ONBOARDING_VIEW_DATA } from '../constants'

import styles from './styles'

export type OnboardingProps = NativeStackScreenProps<RootStackParamList, 'Onboarding'>

const Onboarding = ({ navigation }: OnboardingProps) => {
  const pagerView = useRef<PagerView>(null)
  const numOfPagerView = useRef<number>(ONBOARDING_VIEW_DATA.length - 1)
  const [currentPage, setCurrentPage] = useState<number>(0)
  const handleMoveToNextScreen = useCallback(() => {
    if (currentPage === numOfPagerView.current) navigation.navigate('Login')
    setCurrentPage((prevState) =>
      prevState !== numOfPagerView.current ? prevState + 1 : prevState
    )
  }, [currentPage, navigation])
  const handlePageSelected = useCallback((e: PagerViewOnPageSelectedEvent) => {
    setCurrentPage(e.nativeEvent.position)
  }, [])
  const renderViewPagerChildren: React.JSX.Element[] = useMemo(
    () =>
      ONBOARDING_VIEW_DATA.map(({ id, img, title }: IOnboardingScreenView) => (
        <View key={id} style={styles.page} collapsable>
          <View style={styles.imgContainer}>
            <Image source={img} />
          </View>
          <Paragraph
            content={title}
            maxWidth={300}
            fontWeight="$2"
            color="$color.primary"
            textAlign="center"
            letterSpacing="$3"
            lineHeight="$6"
            fontSize="$4"
          />
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
    <Feature feat="onboarding">
      <SafeAreaView style={[containerStyles.expand, styles.container]}>
        <View style={styles.bgContainer} />
        <PagerView
          initialPage={currentPage}
          onPageSelected={handlePageSelected}
          ref={pagerView}
          style={containerStyles.expand}
        >
          {renderViewPagerChildren}
        </PagerView>
        <XStack
          marginBottom="$space.9"
          space="$space.2.5"
          alignItems="center"
          justifyContent="center"
        >
          {renderPagerIndex}
        </XStack>
        <Button
          title={numOfPagerView.current === currentPage ? 'finish' : 'next'}
          marginHorizontal="$space.6"
          onPress={handleMoveToNextScreen}
        />
      </SafeAreaView>
    </Feature>
  )
}

export default Onboarding
