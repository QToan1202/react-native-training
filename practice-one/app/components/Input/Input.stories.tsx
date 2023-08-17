import { Alert, StyleSheet, View } from 'react-native'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ComponentMeta, ComponentStory } from '@storybook/react-native'

import { COLORS } from '@constants'
import { IForm } from '@types'

import { Button, Input } from '../index'
import { InputProps } from './index'

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>

const styles = StyleSheet.create({
  container: {
    padding: 8,
    display: 'flex',
    rowGap: 7,
  },
})

const Template: ComponentStory<typeof Input> = (arg: Omit<InputProps, 'control'>) => {
  const { control, handleSubmit } = useForm<IForm>()
  const onSubmit: SubmitHandler<IForm> = (data) => {
    Alert.alert(JSON.stringify(data))
  }

  return (
    <View style={styles.container}>
      <Input control={control} {...arg} />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}

export const Default = Template.bind({})
Default.args = {
  name: 'email',
  placeholder: 'Enter your email',
  placeholderTextColor: COLORS.WHITE,
}

export const InputWithLabel = Template.bind({})
InputWithLabel.args = {
  label: 'First name',
  name: 'firstName',
  placeholder: 'Enter your name',
  placeholderTextColor: COLORS.BLACK,
}
