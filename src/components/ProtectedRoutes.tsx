import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = (props: { user: string }) => {
  const { user } = props

  if (user === undefined || user === '') {
    return (
      <Navigate to='login' />
    )
  }

  return (
    <Outlet />
  )
}

export default ProtectedRoutes