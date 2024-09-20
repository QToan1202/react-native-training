import { useId } from 'react'
import { AnimatePresence, Heading, XStack, YStack } from 'tamagui'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useToastController } from '@tamagui/toast'

import { Button, Form, Input, Text } from '@practice-three/shared/ui'
import { useAuthStore } from '@practice-three/shared/context'
import { ENDPOINTS } from '@practice-three/shared/constant'

import { TCardForm } from '../../types'
import { CARD_FORM, DEFAULT_CARD_VALUES } from '../../constants'
import { useAddCard } from '../../hooks'
import { transformAddCardForm } from '../../utils'

type TAddCardFields = Record<keyof typeof CARD_FORM, JSX.Element>

const CardForm = () => {
  const {
    control,
    reset,
    handleSubmit,
    setFocus,
    formState: { errors, isDirty },
  } = useForm<TCardForm>({
    defaultValues: DEFAULT_CARD_VALUES,
  })
  const errorTextId = useId()
  const user = useAuthStore((state) => state.user)
  const toast = useToastController()
  const { mutate: addCard, isPending: isAddingCard } = useAddCard(ENDPOINTS.CARD, user?.id || '')
  const handleSubmitCardForm: SubmitHandler<TCardForm> = (data) => {
    addCard(data, {
      onSuccess: () => {
        toast.show('Payment Card Added Successfully', {
          message:
            'Your new payment card has been added to your account. You can now use it for transactions.',
        })
        reset()
      },
      onError: () => {
        toast.show('Error Adding Payment Card', {
          message:
            'There was an issue adding your payment card. Please check the card details and try again.',
        })
      },
    })
  }
  const handleResetData = () => reset()
  const handleMoveToNextInput = (label: keyof TCardForm) => () => setFocus(label)
  const { CARD_HOLDER, CARD_NUMBER, EXPIRED, SECURITY_CODE } = Object.keys(
    CARD_FORM
  ).reduce<TAddCardFields>(
    (acc: TAddCardFields, key: string, index: number, elements: string[]) => {
      const convertKey = key as keyof typeof CARD_FORM
      const inputLabel = CARD_FORM[convertKey].label
      const nextInputLabel: keyof TCardForm | undefined =
        CARD_FORM[elements[index + 1] as keyof typeof CARD_FORM]?.label
      const element = (
        <YStack key={inputLabel} gap={12}>
          <Heading color="$blue_100" fontWeight="700">
            {CARD_FORM[convertKey].title}
          </Heading>
          <Controller
            name={inputLabel}
            control={control}
            rules={CARD_FORM[convertKey].rules}
            render={({ field: { value, name, onChange, onBlur, ref } }) => (
              <Input
                placeholder={CARD_FORM[convertKey].placeholder}
                isError={!!errors[inputLabel]}
                disabled={isAddingCard}
                returnKeyType={nextInputLabel ? 'next' : 'default'}
                onSubmitEditing={nextInputLabel ? handleMoveToNextInput(nextInputLabel) : undefined}
                blurOnSubmit={nextInputLabel ? false : true}
                value={transformAddCardForm(name, value, onChange).input}
                onChangeText={transformAddCardForm(name, value, onChange).output}
                onBlur={onBlur}
                ref={ref}
              />
            )}
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
    },
    {} as TAddCardFields
  )

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
            onPress={handleResetData}
            borderColor="$red_200"
          />
          <Form.Trigger asChild>
            <Button
              flex={1}
              title="add card"
              fontWeight="700"
              loading={isAddingCard}
              isDisable={!!Object.keys(errors).length || !isDirty}
            />
          </Form.Trigger>
        </XStack>
      </Form>
    </YStack>
  )
}

export default CardForm
