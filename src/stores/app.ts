import create from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  currentLocale: string
  setCurrentLocale: (locale: string) => void
}

export const useAppStore = create(
  persist<AppState>(
    (setState) => ({
      currentLocale: 'en-GB',
      setCurrentLocale: (locale) =>
        setState((state) => ({
          ...state,
          currentLocale: locale,
        })),
    }),
    {
      name: 'app_store',
    }
  )
)
