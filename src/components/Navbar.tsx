import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  const [isLogged, setIsLogged] = React.useState(true)

  useEffect(() => {
    if (isLogged === false) {
      sessionStorage.removeItem('token')
    }
    else if (sessionStorage.getItem('token')) {
      setIsLogged(true)
    }
  }, [isLogged])
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>

        <ul className="menu-items">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/pick-up">Pick-up</Link></li>
          <li><Link to="/delivery">Delivery</Link></li>
          <li><Link to="/mis-pedidos">Mis pedidos</Link></li>
          <li><Link to="/restaurantes">Restaurantes</Link></li>
          <li><Link to="/mi-perfil">Mi perfil</Link></li>
          <li><Link to='/iniciar-sesion' onClick={() => sessionStorage.removeItem('token')}>Cerrar sesion</Link></li>
        </ul>

        <h1 className="logo">RS</h1>
      </div>
    </nav>
  )
}

export default Navbar