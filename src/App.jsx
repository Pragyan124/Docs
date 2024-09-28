import { Routes, Route, useNavigate } from 'react-router-dom'; // Import Routes and Route from react-router-dom
import './App.css';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import Editor from '../src/pages/Editor';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("User logged in ")
    setIsLoggedIn(true);
    navigate('/dashboard');
  };





  return (



    <Routes>

      <Route path="/" element={<Login onLogin={handleLogin} />} />


      <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />} />
      <Route path="/editor" element={<Editor />} />



    </Routes>



  );
}

export default App;
