import React from 'react'

function Tabla() {
  return (
    <div>
        <h1>tabla de Empleado</h1>
      <table>
        <tr>
          <td><strong>Nombre</strong></td>
          <td><strong>Edad</strong></td>
          <td><strong>Email</strong></td>
          
        </tr>
        <tr>
          <td>Jose </td>
          <td> 25</td>
          <td> jfe@gmail.com</td>
        </tr>
        <tr>
          <td> Kate </td>
          <td> 22</td>
          <td> katerine@gmail.com</td>
        </tr>
        <tr>
          <td> Kate </td>
          <td> {Math.floor(Math.random()*100)}</td>
          <td> katerine@gmail.com</td>
        </tr>
      </table>
    </div>
  )
}

export default Tabla
