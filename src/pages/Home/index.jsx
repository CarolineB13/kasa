import React from 'react';
import { appartList } from '../../datas/appartList';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner';
import aboutImage from '../../assets/images/banner_home.png';


const Home = () => {
  return (
    <div>
      <Banner
        image={aboutImage}
        text="Chez vous, partout et ailleurs"
        additionalClass="banner-home"
      />
      <div className="home">
        {appartList.map(appart => (
        <Card key={appart.id} id={appart.id} title={appart.title} cover={appart.cover} />
        ))}
      </div>
    </div>
);
};

export default Home;