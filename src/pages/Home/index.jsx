import React from 'react';
import { appartList } from '../../datas/appartList';
import Card from '../../components/Card/Card';

const Home = () => {
  return (
    <div className="home">
      {appartList.map(appart => (
        <Card key={appart.id} id={appart.id} title={appart.title} cover={appart.cover} />
      ))}
    </div>
  );
};

export default Home;