import { createContext, useState } from "react";

export const ToggleContext = createContext(null);
const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const ToggleContent = [toggle, setToggle];
  return (
    <ToggleContext.Provider value={ToggleContent}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleProvider;
