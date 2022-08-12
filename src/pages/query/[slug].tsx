/* eslint-disable no-nested-ternary */
import { LoaderFn, MakeGenerics, useMatch } from '@tanstack/react-location';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { Post as PostType } from '@/api';
import { Link } from '@/components';
import { queryClient } from '@/config';

type Route = MakeGenerics<{ LoaderData: PostType; Params: { slug: string } }>;

const fetchPostById = async (id: string) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return data;
};
export const Loader: LoaderFn<Route> = async ({ params }) => {
  return queryClient.fetchQuery(['posts', params.slug], () => fetchPostById(params.slug));
};

function usePost(postId: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useQuery<PostType, any>(['posts', postId], () => fetchPostById(postId), {
    enabled: !!postId,
  });
}

function Post() {
  const {
    params: { slug },
  } = useMatch<Route>();

  const { status, data, error, isFetching } = usePost(slug);

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
  );
}

export default Post;
