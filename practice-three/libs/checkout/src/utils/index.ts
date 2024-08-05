import { Children, isValidElement, ReactElement, ReactNode } from 'react'

const getValidChildren = (children: ReactNode) =>
  Children.toArray(children).filter((child) => isValidElement(child)) as ReactElement[]

export default getValidChildren
