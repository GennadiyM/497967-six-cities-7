import PropTypes from 'prop-types';

const reviewItemProp = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.required,
    id: PropTypes.number.required,
    isPro: PropTypes.bool.required,
    name: PropTypes.string.required,
  }).isRequired,
}).isRequired;

export default reviewItemProp;
