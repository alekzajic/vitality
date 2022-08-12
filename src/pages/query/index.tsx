/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, LoaderFn, MakeGenerics, MatchRoute, Outlet, useLoadRoute } from '@tanstack/react-location';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { queryClient } from '../../config/query-client';

type Post = {
  id: string;
  title: string;
  body: string;
};

async function fetchPosts() {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
}

function usePosts() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useQuery<Post[], any>(['posts'], fetchPosts);
}

type Route = MakeGenerics<{ LoaderData: Post }>;

export const Loader: LoaderFn<Route> = async () => {
  return queryClient.fetchQuery(['posts'], fetchPosts);
};

function Posts() {
  const { status, data, error, isFetching } = usePosts();
  const loadRoute = useLoadRoute();

  return (
    <div className="w-full">
      <h2>Posts {isFetching ? '...' : ''}</h2>
      <div>
        {status === 'loading' ? (
          'Loading...'
        ) : status === 'error' ? (
          <span>Error: {error.message}</span>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: '0 0 200px' }}>
              {data?.map((post) => (
                <p key={post.id}>
                  <Link
                    to={`./${post.id}`}
                    onMouseEnter={() => loadRoute({ to: post.id })}
                    style={
                      // We can access the query data here to show bold links for
                      // ones that are cached
                      queryClient.getQueryData(['posts', `${post.id}`])
                        ? {
                            fontWeight: 'bold',
                            color: 'green',
                          }
                        : {}
                    }
                  >
                    {post.title}{' '}
                    <MatchRoute to={post.id} pending>
                      ...
                    </MatchRoute>
                  </Link>
                </p>
              ))}
            </div>
            <div style={{ flex: '1 1' }}>
              <Outlet />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Posts;
