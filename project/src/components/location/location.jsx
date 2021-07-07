import React from 'react';
import PropTypes from 'prop-types';
import LocationItem from '../location-item/location-item';

function Location (props) {
  const { cityNames, cityActive, changeCityHandler } = props;
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityNames.map((city) => (
            <LocationItem
              key={city}
              city={city}
              isActive={city === cityActive}
              onClick={(currentCity) => changeCityHandler(currentCity)}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

Location.propTypes = {
  cityNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  cityActive: PropTypes.string.isRequired,
  changeCityHandler: PropTypes.func.isRequired,
};

export default Location;
