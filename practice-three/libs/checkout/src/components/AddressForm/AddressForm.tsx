import { AnimatePresence, Heading, XStack, YStack } from 'tamagui'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useId } from 'react'

import { Button, ControlSelect, Form, Input, SelectItem, Text } from '@shared/components'

import { TAddressForm } from '../../types'
import { ADDRESS_FORM, COUNTRIES } from '../../constants'

const AddressForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TAddressForm>({
    defaultValues: {
      country: '',
      firstName: '',
      lastName: '',
      address: '',
      optionalAddress: '',
      city: '',
      state: '',
      zipCode: '',
      phone: '',
    },
  })
  const handleSubmitAddressForm: SubmitHandler<TAddressForm> = (data) => {
    console.log(data)
  }
  const errorTextId = useId()

  return (
    <Form gap={18} formControlProp={control} onSubmit={handleSubmit(handleSubmitAddressForm)}>
      {Object.keys(ADDRESS_FORM).map((key: string) => {
        const covertKey = key as keyof typeof ADDRESS_FORM
        const inputLabel = ADDRESS_FORM[covertKey].label

        return (
          <YStack key={inputLabel} gap={12} marginTop={8}>
            <Heading color="$primary" fontWeight="700">
              {ADDRESS_FORM[covertKey].title}
            </Heading>
            {inputLabel === 'country' ? (
              <ControlSelect control={control} label={inputLabel} isError={!!errors[inputLabel]}>
                {COUNTRIES.map((item: string, index) => (
                  <SelectItem key={item} value={item} index={index} name={item} />
                ))}
              </ControlSelect>
            ) : (
              <Input
                // TODO: Fix Form not passing control down to Nested Input component
                control={control}
                label={inputLabel}
                isError={!!errors[inputLabel]}
                options={ADDRESS_FORM[covertKey].rules}
              />
            )}
            <AnimatePresence>
              {errors[inputLabel] && (
                <Text
                  position="absolute"
                  left={0}
                  bottom={-20}
                  color="$red_50"
                  textAlign="center"
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
      })}

      <XStack marginTop={40} gap={12}>
        <Button
          flex={1}
          title="delete"
          variant="outlined"
          fontWeight="700"
          color="$red_200"
          borderColor="$red_200"
        />
        <Form.Trigger asChild>
          <Button flex={1} title="add address" fontWeight="700" />
        </Form.Trigger>
      </XStack>
    </Form>
  )
}

export default AddressForm
