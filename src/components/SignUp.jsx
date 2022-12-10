import React from 'react'

function SingUp(props) {
  return (
    <div style={{ backgroundColor: 'red',
    width:"300px",
    heigth:"300px"}}>
      <h1>Sign up</h1>
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
export default SingUp
