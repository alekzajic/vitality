import { Navigate, useLocation } from '@tanstack/react-location'

import { useAuth } from '@/context'

const PRIVATE = ['/logout']
const PUBLIC = ['/login']

export const Guard = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth()
  const location = useLocation()

  const authedOnPublicPath = auth.token && PUBLIC.includes(location.current.pathname)
  const unAuthedOnPrivatePath = !auth.token && PRIVATE.includes(location.current.pathname)

  if (authedOnPublicPath) return <Navigate to="/" replace />
  if (unAuthedOnPrivatePath) return <Navigate to="/login" replace />

  return <>{children}</>
}
