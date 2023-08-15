import { useState } from 'react'
import { render, fireEvent, renderHook } from '@testing-library/react-native'

import Search from '../index'

describe('Testing Search component', () => {
  it('Render Search component success', () => {
    const { result } = renderHook(() => useState(''))
    const [value, onChangeValue] = result.current
    const component = render(
      <Search value={value} onChangeText={onChangeValue} placeholder="my search input" />
    ).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('When change input value onChangeText must be called with right props', () => {
    const mockOnChange = jest.fn()
    const { getByPlaceholderText } = render(
      <Search value="my first value" onChangeText={mockOnChange} placeholder="my search input" />
    )
    const element = getByPlaceholderText('my search input')

    fireEvent.changeText(element, 'new products')
    expect(mockOnChange).toBeCalledWith('new products')
  })
})
