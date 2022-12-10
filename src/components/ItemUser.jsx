import React from 'react'
const user = {
  name: 'Jose Felipe Escobar',
  country: 'Colombia',
  email: 'jfejose10@gmail.com',
}
class ItemUser extends React.Component {
  state = {}
  render() {
    return (
      <div >
        <p>
          <strong >Nombre: {user.name}</strong>
        </p>
        <p>
          <strong>Pais: {user.country}</strong>
        </p>
        <p>
          <strong>Correo: {user.email}</strong>
        </p>
      </div>
    )
  }
}
export default ItemUser
