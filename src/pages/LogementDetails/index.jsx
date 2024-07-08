// src/pages/LogementDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { appartList } from '../../datas/appartList';
import Carrousel from '../../components/Carrousel/Carrousel';

const LogementDetails = () => {
  const { id } = useParams();
  const logement = appartList.find(appart => appart.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className="logement-details">
      <Carrousel pictures={logement.pictures} />
      <h1>{logement.title}</h1>
      <p>{logement.description}</p>
      <div>
        <h3>Équipements</h3>
        <ul>
          {logement.equipments.map((equip, index) => (
            <li key={index}>{equip}</li>
          ))}
        </ul>
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default LogementDetails;
