import { LoaderFn, MakeGenerics, useMatch } from '@tanstack/react-location'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { Post as PostType } from '@/api'
import { Link } from '@/components'
import { queryClient } from '@/config'

type Route = MakeGenerics<{ LoaderData: PostType; Params: { slug: string } }>

export const Loader: LoaderFn<Route> = async ({ params }) => {
  return await queryClient.fetchQuery(['posts', params.slug], () => fetchPostById(params.slug))
}

const fetchPostById = async (id: string) => {
  await new Promise((r) => setTimeout(r, 500))
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return data
}

function usePost(postId: string) {
  return useQuery<PostType, any>(['posts', postId], () => fetchPostById(postId), {
    enabled: !!postId,
  })
}

function Post() {
  const {
    params: { slug },
  } = useMatch<Route>()

  console.log(slug)

  const { status, data, error, isFetching } = usePost(slug)

  return (
    <div>
      <div>
        <Link to="..">Back</Link>
      </div>
      {!slug || status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <h1>
            {data?.title} {isFetching ? '...' : ' '}
          </h1>
          <div>
            <p>{data?.body}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Post
