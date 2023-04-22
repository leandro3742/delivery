import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar bg-red-200">
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
          {localStorage.getItem('token') && <li><Link to='/iniciar-sesion' onClick={() => localStorage.removeItem('token')}>Cerrar sesion</Link></li>}
        </ul>

        <h1 className="logo">RS</h1>
      </div>
    </nav>
  )
}

export default Navbar