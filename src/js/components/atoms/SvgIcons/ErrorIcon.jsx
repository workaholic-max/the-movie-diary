import React from 'react';
import PropTypes from 'prop-types';

const ErrorIcon = (props) => (
  <svg {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 9.5C19 14.7467 14.7467 19 9.5 19C4.25329 19 0 14.7467 0 9.5C0 4.25329 4.25329 0 9.5 0C14.7467 0 19 4.25329 19 9.5ZM10.6875 14.25C10.6875 14.9058 10.1558 15.4375 9.5 15.4375C8.84416 15.4375 8.3125 14.9058 8.3125 14.25C8.3125 13.5942 8.84416 13.0625 9.5 13.0625C10.1558 13.0625 10.6875 13.5942 10.6875 14.25ZM9.5 3.5625C8.84416 3.5625 8.3125 4.09416 8.3125 4.75V9.5C8.3125 10.1558 8.84416 10.6875 9.5 10.6875C10.1558 10.6875 10.6875 10.1558 10.6875 9.5V4.75C10.6875 4.09416 10.1558 3.5625 9.5 3.5625Z"
      fill="#FF4D00"
    />
  </svg>
);

ErrorIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,
};

ErrorIcon.defaultProps = {
  width: 19,
  height: 19,
  viewBox: '0 0 19 19',
};

export default ErrorIcon;
