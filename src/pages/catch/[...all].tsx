import { MakeGenerics, useMatch } from '@tanstack/react-location'

import { Link } from '@/components'

type Route = MakeGenerics<{ Params: { '*': string } }>

export default function CatchAll() {
  const { params } = useMatch<Route>()

  return (
    <>
      <h1>/catch/*</h1>
      <p>{params['*']}</p>
      <Link to="/routing">⟵</Link>
    </>
  )
}
