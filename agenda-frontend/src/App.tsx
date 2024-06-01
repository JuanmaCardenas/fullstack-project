import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import MainContent from './pages/MainContent';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/:id" element={<MainContent />} />
          <Route path="/user" element={<CreateUser />} />
          <Route path="/user/editUser/:id" element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
