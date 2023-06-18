import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { buttonPropTypes, buttonDefaultProps } from '../../../propTypes/buttonProps';

const Button = forwardRef(({ theme, className, enableRounded, children, ...props }, ref) => {
  const themeClassName = `gl-btn--${theme}`;

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      ref={ref}
      className={classNames('gl-btn', className, themeClassName, {
        'gl-btn--rounded': enableRounded,
      })}
      {...props}
    >
      {children}
    </button>
  );
});

Button.propTypes = buttonPropTypes;
Button.defaultProps = buttonDefaultProps;

export default Button;
