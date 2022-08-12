import { Link } from '@tanstack/react-location';

export default function Sibling() {
  return (
    <>
      <h1>/nested/slibling</h1>
      <p>Using layout from `src/pages/nested.tsx`</p>
      <Link to="/routing">⟵</Link>
    </>
  );
}
