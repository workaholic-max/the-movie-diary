import React from 'react';
import PropTypes from 'prop-types';

const SearchIcon = (props) => (
  <svg
    className="gl-icon gl-icon--search"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="2"
    {...props}
  >
    <circle cx="11" cy="11" r="8" />

    <line x1="24" y1="24" x2="16.65" y2="16.65" />
  </svg>
);

SearchIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,
};

SearchIcon.defaultProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
};

export default SearchIcon;
