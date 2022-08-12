import { LoaderFn, MakeGenerics, useMatch } from '@tanstack/react-location';

import { Link } from '@/components';

type Route = MakeGenerics<{ LoaderData: { name: string } }>;

export const loader: LoaderFn<Route> = async () => {
  return await Promise.resolve({ name: '/routing' });
};

export default function Routing() {
  const { data } = useMatch<Route>();

  return (
    <>
      <h1>{data.name}</h1>

      <Link to={`/dynamic/${Date.now()}`}>dynamic route</Link>

      <Link to={`/catch/${Date.now()}/then/${Date.now()}`}>catch all routes</Link>

      <Link to="/nested">nested layouts</Link>
    </>
  );
}
