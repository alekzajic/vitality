import { LoaderFn, MakeGenerics, useMatch } from '@tanstack/react-location'

import { getPost, Post as PostType } from '@/api'

type Route = MakeGenerics<{ LoaderData: PostType; Params: { slug: string } }>

export const Loader: LoaderFn<Route> = async ({ params }) => {
  return await getPost(params.slug)
}

export const Pending = () => <h1>Loading...</h1>
export const Failure = () => <h1>Something went wrong...</h1>

export default function Post() {
  const { data } = useMatch<Route>()

  return (
    <>
      <h1>Post @ {data.id}</h1>

      <div className="w-full">
        <code className="max-w-fit">
          Loader data
          <pre className="whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre>
        </code>
      </div>
    </>
  )
}
