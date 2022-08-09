import '@/styles/layers.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Container } from '@/components'
import { Guard, queryClient } from '@/config'
import { AuthProvider } from '@/context'

type Props = {
  children: JSX.Element
}

export default function App({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Guard>
          <Container>{children}</Container>
        </Guard>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
