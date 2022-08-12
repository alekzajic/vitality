import { Center, Heading, Image, Text } from '@chakra-ui/react'
import { MakeGenerics } from '@tanstack/react-location'

import { Repo } from '@/api'

type Route = MakeGenerics<{ LoaderData: Repo }>

export default function Home() {
  const data = {
    name: 'Falcon',
    description: 'Platform portal',
  }

  return (
    <>
      <Center flexDirection="column">
        <Image width="320px" height="320px" src="/assets/icons/logo.svg" alt={data.name} title={data.name} />
        <Heading as="h1" size="4xl">
          Falcon v0.0.1
        </Heading>
        <Text>{data.description}</Text>
      </Center>
    </>
  )
}
