import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/"><h1>Agenda Management</h1></Link>
    </header>
  );
};

export default Header;
