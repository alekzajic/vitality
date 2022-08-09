import { LoaderFn, MakeGenerics, useMatch } from '@tanstack/react-location'

import { getRepo, Repo } from '@/api'

type Route = MakeGenerics<{ LoaderData: Repo }>

export const loader: LoaderFn<Route> = () => {
  return getRepo('vitality')
}

export default function Home() {
  const { data } = useMatch<Route>()

  return (
    <>
      <img className="h-32 w-32" src="/assets/icons/logo.svg" alt={data.name} title={data.name} />
      <h1 className="mt-6 text-2xl font-bold text-gray-500">Vitality v0.0.1</h1>
      <em className="mt-4 text-gray-700">{data.description}</em>

      <ul className="mt-8">
        <li>
          <a href={data.html_url} target="_blank" rel="noopener noreferrer">
            <img className="h-6 w-6 opacity-50 hover:opacity-80" src="/assets/icons/github.svg" alt="GitHub" />
          </a>
        </li>
      </ul>
    </>
  )
}
