import type { MutableRefObject, Ref, RefCallback } from 'react'

const mergeRefs = <T>(...inputRefs: (Ref<T> | undefined)[]): Ref<T> | RefCallback<T> => {
  const filteredInputRefs = inputRefs.filter(Boolean)

  if (filteredInputRefs.length <= 1) {
    const firstRef = filteredInputRefs.at(0)

    return firstRef || null
  }

  return (ref) => {
    for (const inputRef of filteredInputRefs) {
      if (typeof inputRef === 'function') {
        inputRef(ref)
        continue
      }

      if (inputRef) (inputRef as MutableRefObject<T | null>).current = ref
    }
  }
}

export default mergeRefs
