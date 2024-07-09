import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../../styles/carrousel.css'; 

const Carrousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  if (pictures.length === 0) {
    return <div>Aucune image disponible</div>;
  }

  return (
    <div className="carrousel-container">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carrousel-image"
      />
      {pictures.length > 1 && (
        <>
          <button className="carrousel-button prev-button" onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="carrousel-button next-button" onClick={handleNextClick}>
          <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <div className="carrousel-indicator">
            {currentIndex + 1} / {pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Carrousel;
