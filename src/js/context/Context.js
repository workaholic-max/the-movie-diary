import React, { useState, useMemo } from 'react';

const Context = React.createContext({});

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(null);

  const providerValue = useMemo(() => ({ state, setState }), [state, setState]);

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
};

export default Context;
