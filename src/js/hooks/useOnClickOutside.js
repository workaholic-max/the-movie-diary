import { useEffect } from 'react';

/**
 * Hook to call callback when click outside of parent element detected
 * (NOTE: wrap useCallback() for callback)
 *
 * @param ref {Object}
 * @param callback {VoidFunction}
 * @param availableElements {Array<String>}
 */
const useOnClickOutside = (ref, callback, availableElements = []) => {
  useEffect(() => {
    const isClickedAvailable = (target) =>
      availableElements.some((element) => target.closest(element));

    const listener = (event) => {
      if (
        ref?.current &&
        !ref.current.contains(event.target) &&
        !isClickedAvailable(event.target)
      ) {
        callback();
      }
    };

    if (ref?.current) {
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
    }

    return () => {
      if (ref?.current) {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      }
    };
  }, [ref, callback, availableElements]);
};

export default useOnClickOutside;
