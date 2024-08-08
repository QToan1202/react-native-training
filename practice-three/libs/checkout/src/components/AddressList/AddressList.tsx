import { useCallback, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Heading } from 'tamagui'

import { useAuthStore } from '@shared/contexts'

import { getAddressesQuery } from '../../hooks'
import { TAddress } from '../../types'
import { useAddressStore } from '../../contexts'
import { Address, AddressProps, AddressSkeleton } from '../Address'

type PickProps = 'onEditAddress' | 'onDeleteAddress'
type AddressListProps = Pick<AddressProps, PickProps>

const AddressList = (addressActions: AddressListProps) => {
  const user = useAuthStore((state) => state.user)
  const [selectedId, selectAddress, setData] = useAddressStore((state) => [
    state.selectedId,
    state.selectAddress,
    state.set,
  ])
  const {
    data: addresses,
    isPending: isGetAddress,
    error: errorWhenGetAddress,
  } = useQuery(getAddressesQuery('/addresses', user?.id || ''))

  const handleSelectAddress = useCallback(
    (id: string) => {
      selectAddress(id)
    },
    [selectAddress]
  )

  useEffect(() => {
    addresses && setData(addresses)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addresses])

  if (isGetAddress) return [...Array(3).keys()].map((item) => <AddressSkeleton key={item} />)

  if (errorWhenGetAddress)
    return (
      <Heading color="$pure_black" fontSize="$3">
        An error occurred while retrieving the address. Please try again later.
      </Heading>
    )

  return addresses.map(({ userId, ...rest }: TAddress) => (
    <Address
      key={rest.id}
      isSelected={rest.id === selectedId}
      onSelectAddress={handleSelectAddress}
      {...addressActions}
      {...rest}
    />
  ))
}

export default AddressList
