// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/componente1">Componente 1</Link></li>
        <li><Link to="/componente2">Componente 2</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
