import React from 'react'
import { Link } from 'react-router'
import './estilosEstaticos.css'
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/' className="link">Home</Link></li>
          <li><Link to='/about'  className="link">About</Link></li>
          <li><Link to='/gallery'  className="link">Galeria</Link></li>
          <li><Link to='/contacto'  className="link">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
