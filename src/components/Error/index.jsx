import React from 'react';
import { NavLink } from 'react-router-dom';

// Composant Error pour afficher un message d'erreur 404
function Error() {
  return (
    <div className='Error-page'>
      {/* Message d'erreur */}
      <h2>404</h2>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      
      {/* Lien pour retourner à la page d'accueil */}
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
}

export default Error;
