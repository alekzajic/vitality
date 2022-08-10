import { Link } from '@/components'

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <ul className="flex items-center gap-4 font-mono">
        <li>
          <Link className="p-2 hover:underline" to="/">
            /home
          </Link>
        </li>

        <li>
          <Link className="p-2 hover:underline" to="/routing">
            /routing
          </Link>
        </li>
      </ul>
    </header>
  )
}
