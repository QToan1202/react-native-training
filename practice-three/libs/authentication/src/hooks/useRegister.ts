import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query'

import { TRegisterForm, TUser } from '@practice-three/shared/types'
import { useAuthStore } from '@practice-three/shared/context'

import { register } from '../services'

export const useRegister = (
  path: string
): UseMutationResult<TUser, Error, TRegisterForm, unknown> => {
  const setUser = useAuthStore((state) => state.setUser)
  const queryClient = useQueryClient()

  return useMutation<TUser, Error, TRegisterForm, unknown>({
    mutationFn: (data: TRegisterForm): Promise<TUser> => register(queryClient)(path, data),
    onSuccess: (data: TUser) => setUser(data),
  })
}

export default useRegister
