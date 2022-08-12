import { ColorModeScript, useTheme } from '@chakra-ui/react';

import { Header } from '@/components';

type Props = {
  children: JSX.Element;
};

export const Container = ({ children }: Props) => {
  const theme = useTheme();
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <div>
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center">{children}</main>
      </div>
    </>
  );
};
