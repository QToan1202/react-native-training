import { RouteObject } from 'react-router-dom'

import {
  ForgotPasswordScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  VerificationScreen,
} from '../screens'

const authRouter: RouteObject[] = [
  {
    index: true,
    path: '/login',
    element: <LoginScreen />,
  },
  {
    path: '/register',
    element: <RegisterScreen />,
  },
  {
    path: '/verification',
    element: <VerificationScreen />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordScreen />,
  },
  {
    path: '/reset-password',
    element: <ResetPasswordScreen />,
  },
]

export default authRouter
