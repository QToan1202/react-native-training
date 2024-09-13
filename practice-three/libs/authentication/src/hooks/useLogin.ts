import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query'

import { TUser, TLoginForm } from '@practice-three/shared/types'
import { useAuthStore } from '@practice-three/shared/context'

import { login } from '../services'

const useLogin = (path: string): UseMutationResult<TUser, Error, TLoginForm, unknown> => {
  const setUser = useAuthStore((state) => state.setUser)
  const queryClient = useQueryClient()

  return useMutation<TUser, Error, TLoginForm, unknown>({
    mutationFn: ({ account, password }: TLoginForm): Promise<TUser> =>
      login(queryClient)(path, account, password),
    onSuccess: (data: TUser) => setUser(data),
  })
}

export default useLogin
