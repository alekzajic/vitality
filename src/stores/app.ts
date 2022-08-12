import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface AppStore {
  locale: {
    locales: string[]
    defaultLocale: string
  }
  setLocale: (locale: object) => void
  currentLocale: string
  setCurrentLocale: (locale: string) => void
}

export const useAppStore = create<AppStore>()(
  devtools(
    persist(
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
)
