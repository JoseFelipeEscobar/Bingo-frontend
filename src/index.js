import React from 'react';
import ReactDOM from 'react-dom';
import ItemUser from './components/ItemUser';
import SingUp from './components/SignUp';
import Login from './components/Login';
import Tabla from './components/Tabla'


const container=document.getElementById('root');
const  renderizado=<Tabla/> //<div><SingUp/> <ItemUser /></div>
// ReactDOM.render(element,container);
ReactDOM.render(<ItemUser />,container);
ReactDOM.render(<SingUp />,container);
ReactDOM.render(renderizado,container);

