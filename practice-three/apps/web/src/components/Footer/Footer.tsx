import { useMemo } from 'react'
import { Heading, Separator, styled, XStack, YGroup, YStack } from 'tamagui'
import { Link, useNavigate } from 'react-router-dom'

import { IconButton, Text as BaseText, Input } from '@practice-three/components'

import { Logo, Mail } from '../../assets/images'
import { FOOTER_CATEGORIES, SOCIAL_MEDIA_CONTACTS } from '../../constants'

const Text = styled(BaseText, {
  fontSize: '$3',
  color: '$pure_white',
  textDecorationLine: 'none',
  variants: {
    isLink: {
      true: {
        hoverStyle: {
          textDecorationLine: 'underline',
        },
      },
    },
  } as const,
  defaultVariants: { isLink: false },
})

const Footer = () => {
  const navigate = useNavigate()
  const handleOnPressLogo = () => navigate('/')
  const renderFooterCategories = useMemo(
    () =>
      FOOTER_CATEGORIES.map(({ title, subCategory }, index) => (
        <YGroup key={index} gap={20}>
          <Heading color="$pure_white" fontSize="$5" fontWeight="700">
            {title}
          </Heading>
          <YStack gap={20}>
            {subCategory.map((value) => (
              <Text asChild isLink key={value}>
                <Link to="#">{value}</Link>
              </Text>
            ))}
          </YStack>
        </YGroup>
      )),
    []
  )
  const renderSocialMedia = useMemo(
    () =>
      SOCIAL_MEDIA_CONTACTS.map((Element, index) => (
        <IconButton key={index}>
          <Element />
        </IconButton>
      )),
    []
  )

  return (
    <YStack
      justifyContent="center"
      paddingVertical={44}
      paddingHorizontal={50}
      backgroundColor="$footer"
      overflow="hidden"
    >
      <XStack gap={29}>
        <IconButton onPress={handleOnPressLogo}>
          <Logo />
        </IconButton>
        <Heading color="$pure_white" fontWeight="700" fontSize={64}>
          Globex
        </Heading>
      </XStack>
      <XStack justifyContent="space-evenly" marginTop={82}>
        {renderFooterCategories}
        <YStack maxWidth={450} gap={16}>
          <Heading color="$pure_white" fontSize="$5" fontWeight="700">
            Stay In Touch
          </Heading>
          <Text>
            Stay in touch to get special offers, free giveaways and once in a lifetime deals
          </Text>
          <Input
            width="100%"
            placeholder="Enter your email"
            color="$pure_white"
            startIcon={<Mail />}
          />
        </YStack>
      </XStack>
      <Separator
        marginTop={80}
        marginBottom={40}
        marginHorizontal={-50}
        borderColor="$pure_white"
      />
      <XStack justifyContent="space-evenly" alignItems="center">
        <Text>Terms &amp; Conditions</Text>
        <Text>Privacy Policy</Text>
        <XStack alignItems="center" gap={32}>
          {renderSocialMedia}
        </XStack>
      </XStack>
    </YStack>
  )
}

export default Footer
