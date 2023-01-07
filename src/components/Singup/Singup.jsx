import React from 'react';


import './Singup.css';

function Login  (){
function saludo(){
  
}
    return (
      <div className="container">
        <div className="left">
          <img src={'https://i.imgur.com/GN85PSz.png'} />
          <div className="card">
          <input placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Pass" />

            <button onClick={saludo}>Sign Up</button>
            <p>
              <a href="#">Prefiero iniciar sesion</a>
            </p>
          </div>
        </div>
        <div className="right">
          <div className='blur'></div>
          {/* <img src={"https://i.imgur.com/E8nFrYe.png"}/> */}
        </div>
      </div>
    );
  }

export default Login;
