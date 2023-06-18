import React from 'react';

const OverlaySpinner = ({ children }) => (
  <div className="gl-overlay-spinner">
    <span />

    {children && <div className="gl-overlay-spinner__title">{children}</div>}
  </div>
);

export default OverlaySpinner;
