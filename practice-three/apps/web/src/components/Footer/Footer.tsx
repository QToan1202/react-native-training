import { useMemo } from 'react'
import { Heading, ListItem, styled, XStack, YGroup, YStack } from 'tamagui'
import { useNavigate } from 'react-router-dom'

import { IconButton, Text as BaseText, Input } from '@practice-three/components'

import { Logo, Mail } from '../../assets/images'
import { FOOTER_CATEGORIES } from '../../constants'

const Text = styled(BaseText, {
  fontSize: '$3',
  color: '$pure_white',
})

const Footer = () => {
  const navigate = useNavigate()
  const handleOnPressLogo = () => navigate('/')
  const renderFooterCategories = useMemo(() => {
    return FOOTER_CATEGORIES.map(({ title, subCategory }, index) => (
      <YGroup key={index} gap={20}>
        <Heading color="$pure_white" fontSize="$5" fontWeight="700">
          {title}
        </Heading>
        <YStack gap={20}>
          {subCategory.map((value) => (
            <Text key={value}>{value}</Text>
          ))}
        </YStack>
      </YGroup>
    ))
  }, [])

  return (
    <YStack
      justifyContent="center"
      paddingVertical={44}
      paddingHorizontal={50}
      gap={82}
      backgroundColor="$footer"
    >
      <XStack gap={29}>
        <IconButton onPress={handleOnPressLogo}>
          <Logo />
        </IconButton>
        <Heading color="$pure_white" fontWeight="700" fontSize={64}>
          Globex
        </Heading>
      </XStack>
      <XStack justifyContent="space-evenly">
        {renderFooterCategories}
        <YStack maxWidth={450} gap={16}>
          <Heading color="$pure_white" fontSize="$5" fontWeight="700">
            Stay In Touch
          </Heading>
          <Text>
            Stay in touch to get special offers, free giveaways and once in a lifetime deals
          </Text>
          <Input width="100%" placeholder="Enter your email" startIcon={<Mail />} />
        </YStack>
      </XStack>
    </YStack>
  )
}

export default Footer
