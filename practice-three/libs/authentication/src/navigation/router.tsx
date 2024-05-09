import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import {
  ForgotPasswordScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  VerificationScreen,
} from '../screens'

const authRouter = createBrowserRouter([
  {
    path: '/login',
    index: true,
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
])

const AuthRouterProvider = () => <RouterProvider router={authRouter} />

export default AuthRouterProvider
