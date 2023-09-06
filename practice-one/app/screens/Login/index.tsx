import { Alert, KeyboardAvoidingView, Platform, TouchableOpacity, View } from 'react-native'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button, ErrorMessage, Heading, Input, Paragraph } from '@components'
import { IForm } from '@types'
import { COLORS } from '@constants'
import { containerStyles } from '@styles'

import styles from './styles'

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>()
  const onSubmit: SubmitHandler<IForm> = (data) => {
    Alert.alert(JSON.stringify(data))
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.titleWrapper}>
        <Heading textMedium content="Welcome to tradly" />
        <Paragraph size="md" content="Login to your account" />
      </View>
      <View style={styles.input}>
        <View>
          <Input
            name="email"
            control={control}
            placeholder="Email/Mobile Number"
            placeholderTextColor={COLORS.WHITE}
            rules={{
              required: 'Enter email or mobile number',
            }}
          />
          <ErrorMessage error={errors.email} />
        </View>
        <View>
          <Input
            name="password"
            secureTextEntry
            control={control}
            placeholder="Password"
            placeholderTextColor={COLORS.WHITE}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password too short',
              },
            }}
          />
          <ErrorMessage error={errors.password} />
        </View>
      </View>
      <Button
        style={styles.loginBtn}
        title="login"
        variant="secondary"
        onPress={handleSubmit(onSubmit)}
      />
      <View style={styles.info}>
        <Paragraph size="lg" content="Forgot your password?" />
        <View style={containerStyles.inline}>
          <Paragraph size="lg" content="Don't have an account?" />
          <TouchableOpacity>
            <Paragraph style={styles.signUpBtn} size="lg" content="Sign up" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login
