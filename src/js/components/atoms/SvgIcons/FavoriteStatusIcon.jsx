import React from 'react';
import PropTypes from 'prop-types';

const FavoriteStatusIcon = (props) => (
  <svg
    className="gl-icon gl-icon--favorite"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    {...props}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.18 2 12.25 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.75-3.4 6.68-8.55 11.54L12 21.35z" />
  </svg>
);

FavoriteStatusIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,
};

FavoriteStatusIcon.defaultProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
};

export default FavoriteStatusIcon;
