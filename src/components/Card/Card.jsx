import React from 'react';
import { Link } from 'react-router-dom';

// Composant Card pour afficher un logement sous forme de carte
const Card = ({ id, title, cover }) => {
  return (
    // Utilise Link de react-router-dom pour naviguer vers la page de détails du logement
    <Link to={`/logement/${id}`}>
      <div className="card">
        {/* Image du logement */}
        <img src={cover} alt={title} />
        {/* Titre du logement */}
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

export default Card;
