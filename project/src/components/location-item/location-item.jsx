import React from 'react';
import PropTypes from 'prop-types';


const ACTICE_CLASS = 'tabs__item--active';

function LocationItem (props) {
  const { city, isActive, onClick } = props;

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive && ACTICE_CLASS}`}
        to={`#${city}`}
        id={city}
        onClick={() => onClick(city)}
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

LocationItem.propTypes = {
  city: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LocationItem;
