import React from 'react';
import { rulesList } from '../../datas/rulesList';
import Collapse from '../../components/Collapse/Collapse';

// Composant Rules pour afficher la liste des règles avec des sections extensibles/rétractables
const Rules = () => {
  return (
    <div className="rules-container">
      {/* Parcourt la liste des règles et affiche chaque règle dans un composant Collapse */}
      {rulesList.map(rule => (
        <Collapse key={rule.id} title={rule.title}>
          <p>{rule.content}</p>
        </Collapse>
      ))}
    </div>
  );
};

export default Rules;
