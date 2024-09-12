import { RouteObject } from 'react-router-dom'

import {
  ForgotPasswordScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  VerificationScreen,
} from '../screens'
import { ROUTER_PATHS } from '../constants'

const authRouter: RouteObject[] = [
  {
    path: ROUTER_PATHS.LOGIN,
    element: <LoginScreen />,
  },
  {
    path: ROUTER_PATHS.REGISTER,
    element: <RegisterScreen />,
  },
  {
    path: ROUTER_PATHS.VERIFICATION,
    element: <VerificationScreen />,
  },
  {
    path: ROUTER_PATHS.FORGOT_PASS,
    element: <ForgotPasswordScreen />,
  },
  {
    path: ROUTER_PATHS.RESET_PASS,
    element: <ResetPasswordScreen />,
  },
]

export default authRouter
