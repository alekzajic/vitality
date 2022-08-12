import { Link } from '@/components'

export default function NestedIndex() {
  return (
    <>
      <h1>/nested</h1>
      <p>Using layout from `src/pages/nested.tsx`</p>
      <Link to="/routing">⟵</Link>
    </>
  )
}
