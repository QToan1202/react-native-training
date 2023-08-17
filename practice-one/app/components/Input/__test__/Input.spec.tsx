import { useForm } from 'react-hook-form'
import { render, fireEvent, renderHook } from '@testing-library/react-native'

import { IUserForms } from '@types'

import Input from '../index'

describe('Testing Input component', () => {
  it('Render Input component success', () => {
    const { result } = renderHook(() => useForm<IUserForms>())
    const { control } = result.current
    const component = render(
      <Input control={control} name="firstName" label="first name" />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Input can change text', () => {
    const { result } = renderHook(() => useForm<IUserForms>())
    const { control } = result.current
    const { getByPlaceholderText } = render(
      <Input control={control} name="firstName" placeholder="first name" />
    )
    const element = getByPlaceholderText('first name')

    fireEvent.changeText(element, 'new values')
    expect(element.props.value).toBe('new values')
  })
})
