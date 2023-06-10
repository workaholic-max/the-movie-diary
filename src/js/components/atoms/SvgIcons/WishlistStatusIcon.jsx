import React from 'react';
import PropTypes from 'prop-types';

const WishlistStatusIcon = (props) => (
  <svg className="gl-icon gl-icon--wishlist" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="24.83" height="21.96" x="12.08" y="14.95" stroke="currentColor" rx="1.51" />

    <line x1="15.92" x2="15.92" y1="12.08" y2="16.99" stroke="currentColor" />

    <line x1="24.5" x2="24.5" y1="12.08" y2="16.99" fill="none" stroke="currentColor" />

    <line x1="33.07" x2="33.07" y1="12.08" y2="16.99" stroke="currentColor" />

    <path
      fill="none"
      stroke="currentColor"
      d="M739.44,1099.41c3.68-3.56,8-3.61,11.34-.27a1.58,1.58,0,0,1,0,2.22c-3.51,3.6-7.77,3.18-11.28,0A1.32,1.32,0,0,1,739.44,1099.41Z"
      transform="translate(-720.66 -1073.41)"
    />

    <circle cx="24.74" cy="26.85" r="1.83" fill="currentColor" />
  </svg>
);

WishlistStatusIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,
};

WishlistStatusIcon.defaultProps = {
  width: 28.83,
  height: 25.96,
  viewBox: '10.08 12.95 28.83 25.96',
};

export default WishlistStatusIcon;
