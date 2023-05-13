import React, { useRef, useEffect, useCallback } from 'react';
import classNames from 'classnames';

import useOnClickOutside from '../../../hooks/useOnClickOutside';
import { modalPropTypes, modalDefaultProps } from '../../../propTypes/modalProps';
import CrossIcon from '../../atoms/SvgIcons/CrossIcon';

const Modal = ({
  className,
  enableCloseBtn,
  enableCloseOnEsc,
  enableCloseOnOverlayClick,
  onClose,
  children,
}) => {
  const modalContentRef = useRef(null);

  /**
   * @param event {KeyboardEvent}
   */
  const handleCloseOnEsc = (event) => {
    if (event.key === 'Escape' && enableCloseOnEsc) {
      onClose();
    }
  };

  const handleCloseOnOverlayClick = useCallback(() => {
    if (enableCloseOnOverlayClick) {
      onClose();
    }
  }, [enableCloseOnOverlayClick, onClose]);

  useOnClickOutside(modalContentRef, handleCloseOnOverlayClick);

  useEffect(() => {
    document.addEventListener('keydown', handleCloseOnEsc);

    document.body.classList.add('scroll-disabled');

    return () => {
      document.removeEventListener('keydown', handleCloseOnEsc);

      document.body.classList.remove('scroll-disabled');
    };
  }, []);

  return (
    <div className={classNames('modal', className)}>
      <div className="modal-wrapper">
        <div className="modal-content" ref={modalContentRef}>
          {enableCloseBtn && (
            <CrossIcon
              className="modal__cross-btn"
              height={22}
              width={22}
              tabIndex={0}
              onClick={onClose}
            />
          )}

          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = modalPropTypes;
Modal.defaultProps = modalDefaultProps;

export default Modal;