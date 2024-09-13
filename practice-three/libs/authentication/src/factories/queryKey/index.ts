export const authKeys = {
  all: ['users'] as const,
  lists: () => [...authKeys.all, 'list'] as const,
  list: (filters: string) => [...authKeys.lists(), { filters }] as const,
}
