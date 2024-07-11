import React from 'react';
import Slideshow from '../../components/Slideshow/Slideshow';

// Composant Carrousel pour afficher un carrousel d'images
const Carrousel = ({ pictures }) => {
  return (
    <div className="carrousel-container">
      {/* Utilise le composant Slideshow pour afficher les images passées en prop */}
      <Slideshow pictures={pictures} />
    </div>
  );
};

export default Carrousel;
