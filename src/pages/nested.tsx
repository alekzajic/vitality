import { Outlet } from '@tanstack/react-location';

import { Link } from '@/components';

export default function Nested() {
  return (
    <>
      <h1>/nested</h1>
      <div>
        <ul>
          <li>
            <Link to="/nested">/index</Link>
          </li>
          <li>
            <Link to="/nested/child">/child</Link>
          </li>
          <li>
            <Link to="/nested/sibling">/sibling</Link>
          </li>
        </ul>

        <Outlet />
      </div>
    </>
  );
}
