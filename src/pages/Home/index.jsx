import React from 'react';
import { appartList } from '../../datas/appartList';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';


const Home = () => {
  return (
    <div>
      <Banner />
      <div className="home">
        {appartList.map(appart => (
        <Card key={appart.id} id={appart.id} title={appart.title} cover={appart.cover} />
        ))}
      </div>
    </div>
);
};

export default Home;