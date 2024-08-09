import { useId } from 'react'
import { AnimatePresence, Heading, XStack, YStack } from 'tamagui'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button, Form, Input, Text } from '@shared/components'

import { TCardForm } from '../../types'
import { CARD_FORM, DEFAULT_CARD_VALUES } from '../../constants'

type TAddCardFields = Record<keyof typeof CARD_FORM, JSX.Element>

const CardForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<TCardForm>({
    defaultValues: DEFAULT_CARD_VALUES,
  })
  const errorTextId = useId()
  const handleSubmitCardForm: SubmitHandler<TCardForm> = (data) => {
    console.log(data)
  }
  const { CARD_HOLDER, CARD_NUMBER, EXPIRED, SECURITY_CODE } = Object.keys(
    CARD_FORM
  ).reduce<TAddCardFields>((acc: TAddCardFields, key: string) => {
    const convertKey = key as keyof typeof CARD_FORM
    const inputLabel = CARD_FORM[convertKey].label
    const element = (
      <YStack key={inputLabel} gap={12}>
        <Heading color="$blue_100" fontWeight="700">
          {CARD_FORM[convertKey].title}
        </Heading>
        <Input
          control={control}
          placeholder={CARD_FORM[convertKey].placeholder}
          label={inputLabel}
          options={CARD_FORM[convertKey].rules}
          isError={!!errors[inputLabel]}
        />
        <AnimatePresence>
          {errors[inputLabel] && (
            <Text
              position="absolute"
              left={0}
              bottom={-20}
              color="$red_50"
              textAlign="left"
              key={errorTextId}
              animation="slow"
              enterStyle={{
                bottom: 0,
                opacity: 0,
              }}
              exitStyle={{
                bottom: -40,
                opacity: 0,
              }}
            >
              {errors[inputLabel]?.message}
            </Text>
          )}
        </AnimatePresence>
      </YStack>
    )
    acc[convertKey] = element

    return acc
  }, {} as TAddCardFields)

  return (
    <YStack flex={1}>
      <Form
        gap={24}
        formControlProp={control}
        onSubmit={handleSubmit(handleSubmitCardForm)}
        justifyContent="space-between"
      >
        {CARD_NUMBER}
        <XStack gap={24}>
          <YStack flex={1}>{EXPIRED}</YStack>
          <YStack flex={1}>{SECURITY_CODE}</YStack>
        </XStack>
        {CARD_HOLDER}
        <XStack gap={40}>
          <Button
            flex={1}
            title="delete"
            variant="outlined"
            fontWeight="700"
            color="$red_200"
            borderColor="$red_200"
          />
          <Form.Trigger asChild>
            <Button
              flex={1}
              title="add card"
              fontWeight="700"
              isDisable={!!Object.keys(errors).length || !isDirty}
            />
          </Form.Trigger>
        </XStack>
      </Form>
    </YStack>
  )
}

export default CardForm
