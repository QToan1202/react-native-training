import { UseMutationResult, useMutation } from '@tanstack/react-query'

import { login } from '@services'
import { IUser } from '@types'

const useLogin = (
  path: string
): UseMutationResult<IUser, Error, Pick<IUser, 'email' | 'password'>, unknown> => {
  const loginMutate = useMutation<IUser, Error, Pick<IUser, 'email' | 'password'>, unknown>({
    mutationFn: ({ email, password }: Pick<IUser, 'email' | 'password'>): Promise<IUser> =>
      login(path, email, password),
  })

  return loginMutate
}

export default useLogin