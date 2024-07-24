
import React from 'react';

export default function Banner({ image = '', text = '', additionalClass = '' }) {
  return (
    <section className={`banner-common ${additionalClass}`}>
      {image && <img src={image} alt="Banner" />}
      {text && <h2>{text}</h2>}
    </section>
  );
}

Banner.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  additionalClass: PropTypes.string,
};