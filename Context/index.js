import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isVersion, setVersion] = useState(0);

  return (
    <AppContext.Provider value={{ isVersion, setVersion }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
