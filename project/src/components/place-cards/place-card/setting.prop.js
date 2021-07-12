import PropTypes from 'prop-types';

const setting = PropTypes.shape({
  MAIN_CLASS: PropTypes.string.isRequired,
  IMAGE_WRAPPER_CLASS: PropTypes.string.isRequired,
  IMG_WIDTH: PropTypes.string.isRequired,
  IMG_HEIGHT: PropTypes.string.isRequired,
  INFO_CLASS: PropTypes.string.isRequired,
}).isRequired;

export default setting;

