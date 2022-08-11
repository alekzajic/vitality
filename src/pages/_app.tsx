import '@/styles/layers.css'

import { Container } from '@/components'

type Props = {
  children: JSX.Element
}

export default function App({ children }: Props) {
  return <Container>{children}</Container>
}
