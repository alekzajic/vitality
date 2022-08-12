import { LoaderFn, MakeGenerics, useMatch } from '@tanstack/react-location';

import { getPost, Post as PostType } from '@/api';

type Route = MakeGenerics<{ LoaderData: PostType; Params: { slug: string } }>;

export const Loader: LoaderFn<Route> = async ({ params }) => {
  return getPost(params.slug);
};

export function Pending() {
  return <h1>Loading...</h1>;
}
export function Failure() {
  return <h1>Something went wrong...</h1>;
}

export default function Post() {
  const { data } = useMatch<Route>();

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
  );
}
