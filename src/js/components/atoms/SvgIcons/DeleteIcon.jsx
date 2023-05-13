import React from 'react';
import PropTypes from 'prop-types';

const DeleteIcon = (props) => (
  <svg {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="17" cy="17" r="17" fill="#202945" />

    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.2929 11.2929C11.6834 10.9024 12.3166 10.9024 12.7071 11.2929L17 15.5858L21.2929 11.2929C21.6834 10.9024 22.3166 10.9024 22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L18.4142 17L22.7071 21.2929C23.0976 21.6834 23.0976 22.3166 22.7071 22.7071C22.3166 23.0976 21.6834 23.0976 21.2929 22.7071L17 18.4142L12.7071 22.7071C12.3166 23.0976 11.6834 23.0976 11.2929 22.7071C10.9024 22.3166 10.9024 21.6834 11.2929 21.2929L15.5858 17L11.2929 12.7071C10.9024 12.3166 10.9024 11.6834 11.2929 11.2929Z"
      fill="white"
    />
  </svg>
);

DeleteIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,
};

DeleteIcon.defaultProps = {
  width: 34,
  height: 34,
  viewBox: '0 0 34 34',
};

export default DeleteIcon;
