import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {
  const token = sessionStorage.getItem('token')
  if (!token) {
    return (
      <Navigate to='iniciar-sesion' />
    )
  }

  return (
    <Outlet />
  )
}

export default ProtectedRoutes