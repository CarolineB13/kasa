import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Composant Slideshow pour afficher un diaporama d'images
const Slideshow = ({ pictures }) => {
  // État pour suivre l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour afficher l'image précédente
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  // Fonction pour afficher l'image suivante
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  // Vérification s'il y a des images disponibles
  if (pictures.length === 0) {
    return <div>Aucune image disponible</div>;
  }

  return (
    <div className="slideshow-container">
      {/* Affiche l'image actuellement sélectionnée */}
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow-image"
      />
      {pictures.length > 1 && (
        <>
          {/* Bouton pour afficher l'image précédente */}
          <button className="slideshow-button prev-button" onClick={handlePrevClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          {/* Bouton pour afficher l'image suivante */}
          <button className="slideshow-button next-button" onClick={handleNextClick}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          {/* Indicateur pour afficher le numéro de la slide actuelle */}
          <div className="slideshow-indicator">
            {currentIndex + 1} / {pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;
