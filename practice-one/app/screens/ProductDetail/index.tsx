import { useCallback } from 'react'
import { ImageBackground, ScrollView, View } from 'react-native'

import { Avatar, Button, Heading, IconButton, Paragraph } from '@components'
import { containerStyles } from '@styles'
import styles from './styles'

const ProductDetail = () => {
  const handlePress = useCallback(() => undefined, [])

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <ImageBackground
          style={[containerStyles.inline, containerStyles.spaceBetween, styles.img]}
          source={require('@assets/cart/item.png')}
        >
          <IconButton icon={require('@assets/back.png')} onPress={handlePress} />
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
          style={styles.text}
        />
      </View>
      <View style={styles.contentWrapper}>
        <Heading style={[styles.text, styles.contentTitle]} content="Details" />
        <View style={[containerStyles.inline, styles.detailWrapper]}>
          <View style={[styles.category, styles.spacing]}>
            <Paragraph style={[styles.text, styles.textTransform]} content="condition" />
            <Paragraph style={[styles.text, styles.textTransform]} content="price type" />
            <Paragraph style={[styles.text, styles.textTransform]} content="category" />
            <Paragraph style={[styles.text, styles.textTransform]} content="location" />
          </View>
          <View style={[styles.categoryInfo, styles.spacing]}>
            <Paragraph style={[styles.text, styles.textTransform]} content="organic" />
            <Paragraph style={[styles.text, styles.textTransform]} content="fixed" />
            <Paragraph style={[styles.text, styles.textTransform]} content="beverages" />
            <Paragraph
              style={[styles.text, styles.textTransform]}
              content="kualalumpur, malaysia"
            />
          </View>
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <Heading style={[styles.text, styles.contentTitle]} content="Additional Details" />
        <View style={[containerStyles.inline, styles.detailWrapper]}>
          <View style={[styles.category, styles.spacing]}>
            <Paragraph style={[styles.text, styles.textTransform]} content="delivery details" />
          </View>
          <View style={[styles.categoryInfo, styles.spacing]}>
            <Paragraph
              style={[styles.text, styles.textTransform]}
              content="Home Delivery Available, Cash On Delivery"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default ProductDetail
