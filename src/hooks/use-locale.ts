import { Search, useSearch } from '@tanstack/react-location'
import { useQuery } from '@tanstack/react-query'

import { useAppStore } from '@/stores'
import { getAppMessages, getLocale } from '@/utils'

/**
 * Changes the locale and returns the new messages. Only locales that are defined in the locales
 * array we receive from the appSettings request are allowed. By order of importance:
 * 1. Locale from url search param: 'locale'
 * 2. Locale from the session storage called currentLocale
 * 3. Locale defined as defaultLocale in the appSettings request.
 * @param {String} locale - the locale object from the appSettings.config request
 * @returns {Object} isLoading, error and data object with locale and messages
 */
export const useLocale = () => {
  // Locale from URL
  const { locale: urlLocale } = useSearch()

  // Locale stored in local storage
  const { currentLocale, setCurrentLocale } = useAppStore()

  const locale = {
    locales: ['en-GB', 'de-DE'],
    defaultLocale: 'en-GB',
  }
  // AppSettings locale data
  const locales = locale?.locales
  const defaultLocale = locale?.defaultLocale

  const activeLocale = getLocale({
    locales: locales || [],
    urlLocale,
    currentLocale,
    defaultLocale,
  })

  const { isLoading, error, data } = useQuery<object, Error>(['locale'], () => getAppMessages(activeLocale), {
    enabled: !!locale,
    onSuccess: () => setCurrentLocale(activeLocale),
  })

  return {
    isLoading,
    error,
    data: {
      locale: activeLocale,
      messages: data,
    },
  }
}
