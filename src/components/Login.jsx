import React from "react";
// import'styles.css'
function Login(){
 return(
    <div>
        <h1>Login</h1>
        <form>
        <label name="email">
          <input name="email "type="email" placeholder="Email" />
        </label>
        <label name="password">
          <input type="password" placeholder="Email" />
        </label>
        <label name="re-password">
          <input type="password" placeholder="Email" />
        </label>
      </form>

    </div>
 )
}

export default Login