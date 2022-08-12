import { Link } from '@tanstack/react-location';

export default function Child() {
  return (
    <>
      <h1>/nested/child</h1>
      <p>Using layout from `src/pages/nested.tsx`</p>
      <Link to="/routing">⟵</Link>
    </>
  );
}
