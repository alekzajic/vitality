import { Center } from '@chakra-ui/react'
import { MakeGenerics } from '@tanstack/react-location'

import { Repo } from '@/api'

type Route = MakeGenerics<{ LoaderData: Repo }>

export default function Home() {
  const data = {
    name: 'Falcon',
    description: 'Platform',
    html_url: 'google.com',
  }

  return (
    <>
      <Center>
        <img width="32px" height="32px" src="/assets/icons/logo.svg" alt={data.name} title={data.name} />
        <h1>Falcon v0.0.1</h1>
        <em>{data.description}</em>
      </Center>
    </>
  )
}
