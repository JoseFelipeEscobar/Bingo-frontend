import React from 'react';
import { Component } from 'react';

import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="left">
          <img src={'https://i.imgur.com/GN85PSz.png'} />
          <div className="card">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Pass" />

            <button>Sign In</button>
            <p>
              <a href="#">No estas registrado ?</a>
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
}
export default Login;
