import { Container } from '@/components'
import { AppProvider } from '@/providers'

type Props = {
  children: JSX.Element
}

export default function App({ children }: Props) {
  return (
    <AppProvider>
      <Container>{children}</Container>
    </AppProvider>
  )
}
