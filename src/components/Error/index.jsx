import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
    return (
      <div className='Error-page'>
        <h2>404</h2>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Retourner sur la page d’accueil</NavLink>

      </div>
    )
  }
  
  export default Error
  