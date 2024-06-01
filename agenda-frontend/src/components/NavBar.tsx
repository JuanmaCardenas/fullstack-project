import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css'

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/home/1">Iberdrola</Link></li>
        <li><Link to="/home/2">Endesa</Link></li>
        <li><Link to="/home/3">Gasnatural</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
