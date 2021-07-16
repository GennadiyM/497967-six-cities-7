import React from 'react';
import PropTypes from 'prop-types';

const getGoodTemplate = (good, index) => <li className="property__inside-item" key={`id-good-${index}`}>{good}</li>;

function Inside(props) {
  const { goods } = props;

  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((good, index) => getGoodTemplate(good, index))}
      </ul>
    </div>
  );
}

Inside.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Inside;
