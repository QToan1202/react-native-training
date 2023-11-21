import { InputProps } from '@components/Input'

export type TAddressFormFields = Pick<InputProps, 'label' | 'name' | 'rules'> & {
  id: string
}

const ADDRESS_FORM_FIELDS: TAddressFormFields[] = [
  {
    id: '1',
    label: 'Name',
    name: 'name',
    rules: {
      required: 'Please enter name of location',
    },
  },
  {
    id: '2',
    label: 'Phone',
    name: 'phone',
    rules: {
      required: 'Please enter phone number',
    },
  },
  {
    id: '3',
    label: 'Street address',
    name: 'streetAddress',
    rules: { required: 'Please enter your address' },
  },
  {
    id: '4',
    label: 'State',
    name: 'state',
    rules: {
      required: 'Please enter state',
    },
  },
  {
    id: '5',
    label: 'Zipcode',
    name: 'zipCode',
    rules: {
      required: 'Please provide zipcode',
    },
  },
]

export default ADDRESS_FORM_FIELDS
