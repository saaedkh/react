//stores/storeContext
import React, { createContext, useContext } from 'react';
import store from './MyStore';

const StoreContext = createContext(store);

export const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={store}>
    {children}
  </StoreContext.Provider>
);

export const useStore = () => useContext(StoreContext);
