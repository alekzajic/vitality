import '@/styles/layers.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Container } from '@/components'
import { queryClient } from '@/config'

type Props = {
  children: JSX.Element
}

export default function App({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>{children}</Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
