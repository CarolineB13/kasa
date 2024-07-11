import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

// Composant Collapse pour afficher du contenu avec une section extensible/rétractable
const Collapse = ({ title, children }) => {
  // État pour gérer l'ouverture et la fermeture du contenu
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état isOpen
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      {/* En-tête du collapse avec un clic pour basculer l'état */}
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`collapse-icon ${isOpen ? 'open' : ''}`}
        />
      </div>
      {/* Contenu du collapse, affiché ou caché selon l'état isOpen */}
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
