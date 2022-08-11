import create from 'zustand'
import { persist } from 'zustand/middleware'

type AppStore = {
  locale: {
    locales: string[]
    defaultLocale: string
  }
  setLocale: (locale: object) => void
  currentLocale: string
  setCurrentLocale: (locale: string) => void
}

export const useAppStore = create(
  persist<AppStore>(
    (setState) => ({
      currentLocale: 'en-GB',
      locale: {
        locales: ['en-GB', 'de-DE'],
        defaultLocale: 'en-GB',
      },
      setLocale: (loc: object) => {
        setState((state) => ({
          ...state,
          loc,
        }))
      },
      setCurrentLocale: (currLocale) =>
        setState((state) => ({
          ...state,
          currentLocale: currLocale,
        })),
    }),
    {
      name: 'app_store',
    }
  )
)
