import React from 'react';
import PropTypes from 'prop-types';

const getImgTemplate = (img, index) => (
  <div className="property__image-wrapper" key={`id-img-${index}`}>
    <img className="property__image" src={img} alt="Photo studio" />
  </div>
);

function Gallery(props) {
  const { images } = props;

  return (
    <div className="property__gallery">
      {images.map((img, index) => getImgTemplate(img, index))}
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Gallery;
