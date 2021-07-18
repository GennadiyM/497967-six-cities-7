import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import placeProp from '../place-cards/place-card/place.prop';
import useMap from '../../hooks/use-map/use-map';
import { CustomPin } from '../../const';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const HEIGHT_MAP = '100%';

function Map (props) {
  const {places, activePlaceId} = props;
  const [{city}] = places;

  const mapRef = useRef(null);

  const map = useMap(mapRef, city);

  const defaultPin = leaflet.icon(CustomPin.DEFAULT);
  const activePin = leaflet.icon(CustomPin.ACTIVE);

  useEffect(() => {
    const markers = leaflet.layerGroup();

    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.latitude.zoom);
      markers.addTo(map);

      places.forEach((place) => {
        leaflet
          .marker({
            lat: place.location.latitude,
            lng: place.location.longitude,
          }, {
            icon: (place.id === activePlaceId)
              ? activePin
              : defaultPin,
          })
          .addTo(markers);
      });
    }

    return () => {
      markers.clearLayers();
    };

  }, [map, places, activePlaceId]);

  return (
    <section
      className="cities__map map"
      style={{height: HEIGHT_MAP}}
      ref={mapRef}
    >
    </section>
  );
}

Map.propTypes = {
  activePlaceId: PropTypes.number,
  places: PropTypes.arrayOf(
    placeProp,
  ).isRequired,
};

export default Map;
