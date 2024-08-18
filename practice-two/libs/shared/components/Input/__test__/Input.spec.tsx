import { useForm } from 'react-hook-form'
import { render, fireEvent, renderHook } from '@testing-library/react-native'

import { IForm } from '@types'

import Input from '../index'
import styles from '../styles'

describe('Testing Input component', () => {
  it('Render Input component success', () => {
    const { result } = renderHook(() => useForm<IForm>())
    const { control } = result.current
    const component = render(
      <Input control={control} name="firstName" label="first name" />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Input can change text', () => {
    const { result } = renderHook(() => useForm<IForm>())
    const { control } = result.current
    const { getByPlaceholderText } = render(
      <Input control={control} name="firstName" placeholder="first name" />
    )
    const element = getByPlaceholderText('first name')

    fireEvent.changeText(element, 'new values')
    expect(element.props.value).toBe('new values')
  })

  it('Input have the right styles when focus or blur', () => {
    const { result } = renderHook(() => useForm<IForm>())
    const { control } = result.current
    const { getByPlaceholderText } = render(
      <Input control={control} label="first name" name="firstName" placeholder="first name" />
    )
    const element = getByPlaceholderText('first name')

    fireEvent(element, 'focus')
    expect(element).toHaveStyle(styles.inputFocus)

    fireEvent(element, 'blur')
    expect(element).toHaveStyle(styles.inputWithLabel)
  })
})
