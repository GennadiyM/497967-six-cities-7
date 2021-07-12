import React from 'react';
import PropTypes from 'prop-types';

const CLASS_PRO_HOST = 'property__avatar-wrapper--pro';

function Host(props) {
  const { avatarUrl, isPro, name} = props.host;
  const { description } = props;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={`${isPro && CLASS_PRO_HOST} property__avatar-wrapper  user__avatar-wrapper`}>
          <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {name}
        </span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
}

Host.propTypes = {
  host: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }),
  description: PropTypes.string.isRequired,
};

export default Host;
