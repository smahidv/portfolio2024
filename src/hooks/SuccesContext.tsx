import { useState, createContext, ReactNode } from "react";

type SuccessContextType = {
  isSent: boolean;
  handleIsSent: () => void;
};

export const SuccesContext = createContext<SuccessContextType | undefined>(undefined);

export const SuccesContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSent, setIsSent] = useState(false);
  function handleIsSent() {
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
    }, 3000);
  }

  return (
    <SuccesContext.Provider value={{ isSent, handleIsSent }}>
      {children}
    </SuccesContext.Provider>
  );
};
