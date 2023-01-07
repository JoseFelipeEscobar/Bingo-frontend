import './style.css'
import React from 'react';
import ReactDOM from 'react-dom';
import JuegoBingo from './components/Juego-activo/JuegoBingo';
import Login from './components/Login/Login';
import Singup from './components/Singup/Singup';



const container=document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
      <Singup/>
    </React.StrictMode>
  );

// root.render(<Login/>);