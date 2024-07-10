import React , {useState } from 'react';
import { useParams } from 'react-router-dom';
import { appartList } from '../../datas/appartList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import Carrousel from '../../components/Carrousel/Carrousel';
import Error from '../../components/Error';

const LogementDetails = () => {
  const { id } = useParams();
  const logement = appartList.find(appart => appart.id === id);

  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);
  if (!logement) {
    return <Error/>;
  }

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

  const toggleDescription = () => setShowDescription(!showDescription);
  const toggleEquipments = () => setShowEquipments(!showEquipments);


  return (
    <div className="logement-details">
      <Carrousel pictures={logement.pictures} />
      <div className="logement-details-container">
        <div className="logement-details-content">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <ul className="tags">
            {logement.tags.map((tag, index) => (
              <li key={index} className="tag">{tag}</li>
            ))}
          </ul>
        </div>
        <div className="host-details">
          <div className="host">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="rating">
            {renderStars(logement.rating)}
          </div>
      </div>
    </div>
      <div className="description-equipements">
        <div className="description">
          <h3 onClick={toggleDescription}>
            Description
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`toggle-icon ${showDescription ? 'open' : ''}`}
            />
          </h3>
          <div className={`content ${showDescription ? 'open' : ''}`}>
            <p>{logement.description}</p>
          </div>
        </div>
        <div className="equipements">
          <h3 onClick={toggleEquipments}>
            Équipements
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`toggle-icon ${showEquipments ? 'open' : ''}`}
            />
          </h3>
          <div className={`content ${showEquipments ? 'open' : ''}`}>
            <ul>
              {logement.equipments.map((equip, index) => (
                <li key={index}>{equip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


export default LogementDetails;