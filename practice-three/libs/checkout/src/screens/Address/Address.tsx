import { useState } from 'react'
import { ScrollView, YStack } from 'tamagui'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useToastController } from '@tamagui/toast'

import { AlertDialog, Button, Toast } from '@shared/components'
import { CheckoutStack } from '@shared/types'
import { useAuthStore } from '@shared/contexts'

import { Header, Step, StepLabel, Stepper } from '../../components'
import { STEPPER_LABELS } from '../../constants'
import { AddressList } from '../../components'
import { useAddressStore } from '../../contexts'
import { useDeleteAddress } from '../../hooks'

type AddressScreenProps = NativeStackScreenProps<CheckoutStack, 'Address'>

const getStepIndex = (label: string) =>
  STEPPER_LABELS.findIndex(
    (value: string) => !value.localeCompare(label, 'en', { sensitivity: 'base' })
  )

const Address = ({ navigation }: AddressScreenProps) => {
  const handleGoBack = () => navigation.goBack()
  const handleAddAddress = () => navigation.navigate('AddAddress')
  const handleEditAddress = (id: string) => navigation.navigate('AddAddress', { id })
  const user = useAuthStore((state) => state.user)
  const toast = useToastController()
  const { mutate: deleteAddress, isPending: isDeletingAddress } = useDeleteAddress(
    '/addresses',
    user?.id || ''
  )
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectIdForDelete, setSelectIdForDelete] = useState<string | null>(null)
  const handleDeleteAddress = (id: string) => {
    setIsOpen(true)
    setSelectIdForDelete(id)
  }
  const handleCancelAlert = () => {
    setIsOpen(false)
  }
  const handleSuccessAlert = () => {
    deleteAddress(
      { id: selectIdForDelete || '' },
      {
        onSuccess: () => {
          toast.show('This address have been removed successfully!')
        },
        onError: () => {
          toast.show('Something went wrong!', {
            message: "Can't not delete address. Please reload and try again.",
          })
        },
        onSettled: () => {
          setSelectIdForDelete(null)
          handleCancelAlert()
        },
      }
    )
  }

  const selectedId = useAddressStore((state) => state.selectedId)
  const renderStepper = (
    <Stepper activeStep={selectedId ? getStepIndex('Address') : getStepIndex('Cart')}>
      {STEPPER_LABELS.map((label: string) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )

  return (
    <YStack justifyContent="space-between" gap={24}>
      <YStack gap={20}>
        <Header title="Choose Delivery Address" onBack={handleGoBack} />
        {renderStepper}
        <ScrollView contentContainerStyle={{ flex: 1, gap: 10 }}>
          <AddressList onEditAddress={handleEditAddress} onDeleteAddress={handleDeleteAddress} />
        </ScrollView>
      </YStack>
      <Button title="add an address" onPress={handleAddAddress} />
      <AlertDialog
        title="Remove product"
        open={isOpen}
        description="Are you sure you want to delete this item from your cart? This action cannot be undone."
        isLoading={isDeletingAddress}
        onCancel={handleCancelAlert}
        onSuccess={handleSuccessAlert}
      />
      <Toast />
    </YStack>
  )
}

export default Address
