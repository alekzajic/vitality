import React from 'react';
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { Link as LocationLink, LinkProps } from '@tanstack/react-location';

type Props = LinkProps & ChakraLinkProps;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Link: React.FC<Props> = React.forwardRef((props: Props, ref: React.Ref<any>) => {
  return <ChakraLink as={LocationLink} preload={5000} ref={ref} {...props} />;
});

Link.displayName = 'Link';
