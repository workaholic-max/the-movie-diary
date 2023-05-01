import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { buttonPropTypes, buttonDefaultProps } from '../../../propTypes/buttonProps';

const Button = forwardRef(
  ({
    className, dataQaId, disableDefaultClassName, children, ...props
  }, ref) => (
    // eslint-disable-next-line react/button-has-type
    <button
      ref={ref}
      className={classNames({ btn: !disableDefaultClassName }, className)}
      {...props}
    >
      {children}
    </button>
  ),
);

Button.propTypes = buttonPropTypes;
Button.defaultProps = buttonDefaultProps;

export default Button;
