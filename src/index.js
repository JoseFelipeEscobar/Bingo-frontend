import './style.css'
import React from 'react';
import ReactDOM from 'react-dom';
import JuegoBingo from './components/Juego-activo/JuegoBingo';
import Login from './components/Login/Login';



const container=document.getElementById('root');
const root = ReactDOM.createRoot(container);


root.render(<Login/>);