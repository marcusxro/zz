// RouteContext.js
import React, { createContext, useContext, useState } from 'react';

const RouteContext = createContext();

export function useRoute() {
  return useContext(RouteContext);
}

export function RouteProvider({ children }) {
  const [route, setRoute] = useState('/'); // Default route is '/'

  const navigate = (newRoute) => {
    setRoute(newRoute);
  };

  return (
    <RouteContext.Provider value={{ route, navigate }}>
      {children}
    </RouteContext.Provider>
  );
}
