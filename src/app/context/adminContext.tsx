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
import eventRecord from "@/app/utils/eventRecord";
interface UserContextType {
  adminCrendential: crendentialType;
  setAdminCrendential: Dispatch<SetStateAction<crendentialType>>;
  adminLoadingButton: boolean;
  setAdminLoadingButton: Dispatch<SetStateAction<boolean>>;
  isAddEventOpen: boolean;
  setIsAddEventOpen: Dispatch<SetStateAction<boolean>>;
  singleEventRecord: any;
  setSingleEventRecord: Dispatch<SetStateAction<any>>;
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
  const [isAddEventOpen, setIsAddEventOpen] = useState<boolean>(false);

  const [singleEventRecord, setSingleEventRecord] = useState<any>(eventRecord);

  return (
    <AdminContext.Provider
      value={{
        adminCrendential,
        setAdminCrendential,
        adminLoadingButton,
        setAdminLoadingButton,
        isAddEventOpen,
        setIsAddEventOpen,
        singleEventRecord,
        setSingleEventRecord,
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
