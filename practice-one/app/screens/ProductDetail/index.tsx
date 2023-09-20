import React, { useCallback, useMemo } from 'react'
import { ImageBackground, ScrollView, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@navigation/Stack'

import { Avatar, Button, Heading, IconButton, Paragraph } from '@components'
import { containerStyles } from '@styles'
import { CATEGORY } from '@constants'

import styles from './styles'

export interface ProductDetailProps
  extends NativeStackScreenProps<RootStackParamList, 'ProductDetail'> {}

const ProductDetail = ({ navigation }: ProductDetailProps) => {
  const handleBackPress = useCallback(() => navigation.goBack(), [navigation])
  const handlePress = useCallback(() => undefined, [])
  const Categories: React.JSX.Element[] = useMemo(
    () =>
      CATEGORY.map((item: string) => (
        <Paragraph style={[styles.text, styles.textTransform]} content={item} />
      )),
    []
  )

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <ImageBackground
          style={[containerStyles.inline, containerStyles.spaceBetween, styles.img]}
          source={require('@assets/cart/item.png')}
        >
          <IconButton icon={require('@assets/back.png')} onPress={handleBackPress} />
          <View style={[containerStyles.inline]}>
            <IconButton icon={require('@assets/share.png')} onPress={handlePress} />
            <IconButton icon={require('@assets/heart.png')} onPress={handlePress} />
            <IconButton icon={require('@assets/more.png')} onPress={handlePress} />
          </View>
        </ImageBackground>
        <View style={styles.titleWrapper}>
          <Heading style={styles.title} content="Coca Cola" />
          <Heading style={[styles.title, styles.price]} content="$25" />
        </View>
      </View>
      <View style={[containerStyles.inline, containerStyles.spaceBetween, styles.store]}>
        <Avatar size="md" source={require('@assets/avatar.png')} name="tradly store" />
        <Button
          style={styles.btn}
          titleStyle={styles.btnTitle}
          title="follow"
          shrink
          onPress={handlePress}
        />
      </View>
      <View style={styles.contentWrapper}>
        <Paragraph
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis cras placerat diam ipsum ut. Nisi vel adipiscing massa bibendum diam. Suspendisse mattis dui maecenas duis mattis. Mattis aliquam at arcu, semper nunc, venenatis et pellentesque eu. Id tristique maecenas tristique habitasse eu elementum sed. Aliquam eget lacus, arcu, adipiscing eget feugiat in dolor sagittis.
Non commodo, a justo massa porttitor sed placerat in. Orci tristique etiam tempus sed. Mi varius morbi egestas dictum tempor nisl. In "
            <View style={[styles.category, styles.spacing]}>{Categories}</View>
  )
}

export default ProductDetail
