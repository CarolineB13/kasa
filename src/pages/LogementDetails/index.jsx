import React from 'react';
import { useParams } from 'react-router-dom';
import { appartList } from '../../datas/appartList';
import Slideshow from '../../components/Slideshow/Slideshow';
import Error from '../Error';
import Collapse from '../../components/Collapse/Collapse';
import Rating from '../../components/Rating/Rating';
import Host from '../../components/Host/Host';

const LogementDetails = () => {
  const { id } = useParams();
  const logement = appartList.find((appart) => appart.id === id);

  if (!logement) {
    return <Error />;
  }

  return (
    <div className="logement-details">
      <Slideshow pictures={logement.pictures} />

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
          <Host name={logement.host.name} picture={logement.host.picture} />
          <Rating rating={logement.rating} />
        </div>
      </div>

      <div className="description-equipements">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
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
