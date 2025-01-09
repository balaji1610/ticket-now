"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { crendentialType } from "../interface/interface";

interface UserContextType {
  adminCrendential: crendentialType;
  setAdminCrendential: Dispatch<SetStateAction<crendentialType>>;
}

const AdminContext = createContext<UserContextType | undefined>(undefined);

interface ContextProps {
  children: ReactNode;
}

const AdminProvider: React.FC<ContextProps> = ({ children }) => {
    
  const [adminCrendential, setAdminCrendential] = useState<crendentialType>({
    username: "",
    password: "",
  });

  return (
    <AdminContext.Provider
      value={{
        adminCrendential,
        setAdminCrendential,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export { AdminProvider, AdminContext };

export const useAdminContext = (): UserContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("AdminContext must be used within an AdminProvider");
  }
  return context;
};
