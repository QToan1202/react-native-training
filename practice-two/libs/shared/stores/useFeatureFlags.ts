import { create } from 'zustand'

interface FeatureState {
  features: string[]
}

interface FeatureActions {
  setFeatures: (feats: string) => void
  isFeatureActive: (featName: string) => boolean
}

const initState: FeatureState = {
  features: [],
}

export const useFeatureFlags = create<FeatureState & FeatureActions>()((set, get) => ({
  ...initState,
  setFeatures: (feats: string) => {
    const convertToArr = feats.split(',').map((item: string) => item.trim())

    set(() => ({ features: convertToArr }))
  },
  isFeatureActive: (featName: string) => {
    return get().features.includes(featName.toLowerCase())
  },
}))

export default useFeatureFlags
