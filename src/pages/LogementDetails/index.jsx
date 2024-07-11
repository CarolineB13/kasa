import React from 'react';
import { useParams } from 'react-router-dom';
import { appartList } from '../../datas/appartList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Carrousel from '../../components/Carrousel/Carrousel';
import Error from '../../components/Error';
import Collapse from '../../components/Collapse/Collapse';

// Composant LogementDetails pour afficher les détails d'un logement spécifique
const LogementDetails = () => {
  // Récupère l'ID du logement à partir des paramètres d'URL
  const { id } = useParams();

  // Recherche le logement correspondant dans la liste des appartements
  const logement = appartList.find(appart => appart.id === id);

  // Si le logement n'est pas trouvé, affiche le composant Error
  if (!logement) {
    return <Error />;
  }

  // Fonction pour rendre les étoiles de notation
  const renderStars = (rating) => {
    const totalStars = 5;
    const stars = [];
    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i < rating ? 'star-filled' : 'star-empty'}
        />
      );
    }
    return stars;
  };

  return (
    <div className="logement-details">
      {/* Composant Carrousel pour afficher les images du logement */}
      <Carrousel pictures={logement.pictures} />

      <div className="logement-details-container">
        <div className="logement-details-content">
          {/* Titre et localisation du logement */}
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          {/* Liste des tags */}
          <ul className="tags">
            {logement.tags.map((tag, index) => (
              <li key={index} className="tag">{tag}</li>
            ))}
          </ul>
        </div>

        <div className="host-details">
          <div className="host">
            {/* Nom et photo de l'hôte */}
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>

          {/* Étoiles de notation */}
          <div className="rating">
            {renderStars(logement.rating)}
          </div>
        </div>
      </div>

      <div className="description-equipements">
        {/* Composant Collapse pour afficher la description du logement */}
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        {/* Composant Collapse pour afficher les équipements du logement */}
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equip, index) => (
              <li key={index}>{equip}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default LogementDetails;
