import { Children, isValidElement, ReactElement, ReactNode } from 'react'

export const getValidChildren = (children: ReactNode) =>
  Children.toArray(children).filter((child) => isValidElement(child)) as ReactElement[]

export const getStepIndex = (data: string[], label: string) =>
  data.findIndex((value: string) => !value.localeCompare(label, 'en', { sensitivity: 'base' }))
