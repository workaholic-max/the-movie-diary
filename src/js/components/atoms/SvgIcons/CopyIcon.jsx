import React from 'react';
import PropTypes from 'prop-types';

const CopyIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill="currentColor"
      d="M11 17H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12v2H4v12h7v-2l4 3l-4 3v-2m8 4V7H8v6H6V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2h2v2h11Z"
    />
  </svg>
);

CopyIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,
};

CopyIcon.defaultProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
};

export default CopyIcon;