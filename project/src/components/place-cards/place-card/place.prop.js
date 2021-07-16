import PropTypes from 'prop-types';

const placeProp = PropTypes.shape({
  city: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  id: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
}).isRequired;

export default placeProp;
