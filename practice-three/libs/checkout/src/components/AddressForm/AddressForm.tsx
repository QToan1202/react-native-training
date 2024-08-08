import { AnimatePresence, Heading, XStack, YStack } from 'tamagui'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useId, useMemo } from 'react'
import { useToastController } from '@tamagui/toast'
import { useQueryClient } from '@tanstack/react-query'

import { Button, ControlSelect, Form, Input, SelectItem, Text, Toast } from '@shared/components'
import { useAuthStore } from '@shared/contexts'

import { TAddressForm } from '../../types'
import { ADDRESS_FORM, COUNTRIES, DEFAULT_ADDRESS_VALUES } from '../../constants'
import { findAddressQuery, useAddAddress, useDeleteAddress, useEditAddress } from '../../hooks'

export type AddressFormProps = { id?: string }

const AddressForm = ({ id }: AddressFormProps) => {
  const queryClient = useQueryClient()
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<TAddressForm>({
    defaultValues: async () => {
      if (!id) return DEFAULT_ADDRESS_VALUES

      const { id: _, ...rest } = await queryClient.ensureQueryData(
        findAddressQuery('/addresses', id)
      )
      return { ...rest }
    },
  })
  const toast = useToastController()
  const user = useAuthStore((state) => state.user)
  const { mutate: addAddress, isPending: isAddingAddress } = useAddAddress(
    '/addresses',
    user?.id || ''
  )
  const { mutate: editAddress, isPending: isEditingAddress } = useEditAddress(
    '/addresses',
    id || '',
    user?.id || ''
  )
  const { mutate: deleteAddress, isPending: isDeletingAddress } = useDeleteAddress(
    '/addresses',
    user?.id || ''
  )
  const isActionFiring = useMemo(
    () => isAddingAddress || isEditingAddress || isDeletingAddress,
    [isAddingAddress, isEditingAddress, isDeletingAddress]
  )
  const handleSubmitAddressForm: SubmitHandler<TAddressForm> = (data) => {
    const actions = id ? editAddress : addAddress

    actions(data, {
      onSuccess: async () => {
        id ? reset(await queryClient.ensureQueryData(findAddressQuery('/addresses', id))) : reset()
        toast.show(
          id ? 'Address have edited successfully!' : 'New address have added successfully!'
        )
      },
      onError: () => {
        toast.show('Something went wrong!', {
          message: "Can't not add address. Please reload and try again.",
        })
      },
    })
  }
  const handleDeleteAddress = () => {
    deleteAddress(
      { id: id || '' },
      {
        onSuccess: async () => {
          reset(DEFAULT_ADDRESS_VALUES)
          toast.show('This address have been removed successfully!')
        },
        onError: () => {
          toast.show('Something went wrong!', {
            message: "Can't not add address. Please reload and try again.",
          })
        },
      }
    )
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
              <ControlSelect
                control={control}
                label={inputLabel}
                isError={!!errors[inputLabel]}
                options={ADDRESS_FORM[covertKey].rules}
                disabled={isActionFiring}
              >
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
                disabled={isActionFiring}
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
          loading={isDeletingAddress}
          isDisable={!id}
          onPress={handleDeleteAddress}
        />
        <Form.Trigger asChild>
          <Button
            flex={1}
            title={id ? 'edit address' : 'add address'}
            fontWeight="700"
            loading={isAddingAddress || isEditingAddress}
            isDisable={!!Object.keys(errors).length || isDeletingAddress || !isDirty}
          />
        </Form.Trigger>
      </XStack>
      <Toast />
    </Form>
  )
}

export default AddressForm
