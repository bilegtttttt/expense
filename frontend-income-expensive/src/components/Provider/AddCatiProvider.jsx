import { useState, createContext } from "react";

export const AddCatiContext = createContext();

const AddCatiProvider = ({ children }) => {
  const [addCati, setAddCati] = useState(true);
  return (
    <AddCatiContext.Provider value={{ addCati, setAddCati }}>
      {children}
    </AddCatiContext.Provider>
  );
};

export default AddCatiProvider;
