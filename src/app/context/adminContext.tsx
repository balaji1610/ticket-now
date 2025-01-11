"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
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
  allEvents: any;
  setAllEvents: Dispatch<SetStateAction<any>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  updateEventId: string;
  setUpdateEventId: Dispatch<SetStateAction<string>>;
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
  const [allEvents, setAllEvents] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [updateEventId, setUpdateEventId] = useState<string>("");
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
        allEvents,
        setAllEvents,
        isLoading,
        setIsLoading,
        isEdit,
        setIsEdit,
        updateEventId,
        setUpdateEventId,
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
