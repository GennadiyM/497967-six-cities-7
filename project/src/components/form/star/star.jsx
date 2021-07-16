import React from 'react';
import PropTypes from 'prop-types';

function Star (props) {
  const {id, title, changeHandler} = props;

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={id}
        id={`${id}-stars`}
        type="radio"
        onChange={(evt) => changeHandler(evt.target.id)}
      />
      <label htmlFor={`${id}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

Star.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default Star;
