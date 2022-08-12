type GetLocaleArgs = {
  locales: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  urlLocale: any;
  currentLocale: string;
  defaultLocale: string;
};

export const getLocale = ({ locales, urlLocale, currentLocale, defaultLocale }: GetLocaleArgs) => {
  /**
   * By order of importance, if the url has a locale and it's in the allowed locales array we use
   * that one.
   */
  if (urlLocale && locales.includes(urlLocale as string)) {
    return urlLocale;
  }

  /**
   * If the url does not and we have a currentLocale from the store we see if it's still in the
   * allowed locales array and if so use that one.
   */
  if (!urlLocale && currentLocale && locales.includes(currentLocale)) {
    return currentLocale;
  }

  /**
   * If all above fails we return the defaultLocale we received in the appSettings request.
   */
  return defaultLocale;
};
