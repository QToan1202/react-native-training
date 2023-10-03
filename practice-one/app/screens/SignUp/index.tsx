import { useCallback, useMemo } from 'react'
import { Alert, KeyboardAvoidingView, Platform, View } from 'react-native'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '@navigation/Stack'

import { Button, Heading, Input, Paragraph } from '@components'
import { IForm } from '@types'
import { SIGN_UP_INPUTS } from '@constants'

import styles from './styles'

export interface SignUpScreenProps extends NativeStackScreenProps<RootStackParamList, 'SignUp'> {}

const SignUp = ({ navigation }: SignUpScreenProps) => {
  const { control, handleSubmit, watch } = useForm<IForm>()
  const observePassword: string = watch('password')
  const onSubmit: SubmitHandler<IForm> = (data) => {
    Alert.alert(JSON.stringify(data))
  }
  const handleToLoginScreen = useCallback(() => navigation.navigate('Login'), [navigation])
  const SignUpInputs = useMemo(
    () =>
      SIGN_UP_INPUTS(observePassword).map(({ ...props }) => <Input {...props} control={control} />),
    [control, observePassword]
  )

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Heading content="Welcome to tradly" textMedium />
        <Paragraph content="Signup to your account" size="md" />
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {SignUpInputs}
      </KeyboardAvoidingView>
      <Button
        style={styles.btn}
        title="create"
        variant="secondary"
        onPress={handleSubmit(onSubmit)}
      />
      <View style={styles.info}>
        <Paragraph size="lg" content="Have an account?" />
        <Button
          style={styles.signInBtn}
          titleStyle={styles.btnTitle}
          title="Sign in"
          variant="tertiary"
          onPress={handleToLoginScreen}
        />
      </View>
    </SafeAreaView>
  )
}

export default SignUp
