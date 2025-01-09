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
  adminLoadingButton: boolean;
  setAdminLoadingButton: Dispatch<SetStateAction<boolean>>;
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
  const [adminLoadingButton, setAdminLoadingButton] = useState<boolean>(false);
  return (
    <AdminContext.Provider
      value={{
        adminCrendential,
        setAdminCrendential,
        adminLoadingButton,
        setAdminLoadingButton,
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
