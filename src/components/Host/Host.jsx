import React from 'react';
import PropTypes from 'prop-types';

const Host = ({ name, picture }) => {
  return (
    <div className="host">
      <p>{name}</p>
      <img src={picture} alt={name} />
    </div>
  );
};
Host.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
};
export default Host;
