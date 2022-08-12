import { ReactNode } from 'react';
import { IntlContext, IntlProvider } from 'react-intl';
import { ChakraProvider } from '@chakra-ui/react';

import { useLocale } from '@/hooks';
import { theme } from '@/theme';

type Props = {
  children: ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  const { isLoading: isLocaleLoading, error: localeError, data: localeData } = useLocale();

  const isLoading = isLocaleLoading;

  return (
    <>
      {isLoading && <>Loading...</>}

      {localeError && <>Error: {localeError.message}</>}

      {!isLoading && (
        <IntlProvider
          locale={localeData?.locale as string}
          messages={localeData?.messages as Record<string, string>}
          key={localeData?.locale as string}
        >
          <IntlContext.Consumer>{() => <ChakraProvider theme={theme}>{children}</ChakraProvider>}</IntlContext.Consumer>
        </IntlProvider>
      )}
    </>
  );
};
