import { Link } from '@/components'

export default function NotFound() {
  return (
    <>
      <h1>/404</h1>
      <p>page not found</p>
      <Link to="/">go home</Link>
    </>
  )
}
