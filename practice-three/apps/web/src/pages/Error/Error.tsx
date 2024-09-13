'use client'

import { useErrorBoundary } from 'react-error-boundary'
import { useRouteError } from 'react-router-dom'

import { ErrorScreen } from '@practice-three/shared/ui'

const Error = () => {
  const { resetBoundary } = useErrorBoundary()
  const someError = useRouteError()

  return <ErrorScreen error={someError} resetErrorBoundary={resetBoundary} />
}

export default Error
