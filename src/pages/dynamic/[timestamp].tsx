import { MakeGenerics, useMatch } from '@tanstack/react-location';

import { Link } from '@/components';

type Page = MakeGenerics<{ Params: { timestamp: string } }>;

export default function DynamicTimestamp() {
  const { params } = useMatch<Page>();

  return (
    <>
      <h1>/dynamic/:timestamp</h1>
      <p>{params.timestamp}</p>
      <Link to="/routing">⟵</Link>
    </>
  );
}
