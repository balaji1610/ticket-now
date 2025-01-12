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
  userCrendential: crendentialType;
  setUserCrendential: Dispatch<SetStateAction<crendentialType>>;
  newUserCrendential: crendentialType;
  setNewUserCrendential: Dispatch<SetStateAction<crendentialType>>;
  userLoadingButton: boolean;
  setUserLoadingButton: Dispatch<SetStateAction<boolean>>;
  selectedEvent: any;
  setSelectedEvent: Dispatch<SetStateAction<any>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface ContextProps {
  children: ReactNode;
}

const UserProvider: React.FC<ContextProps> = ({ children }) => {
  const [userCrendential, setUserCrendential] = useState<crendentialType>({
    username: "",
    password: "",
  });
  const [newUserCrendential, setNewUserCrendential] = useState<crendentialType>(
    {
      username: "",
      password: "",
    }
  );
  const [userLoadingButton, setUserLoadingButton] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<any>({});

  return (
    <UserContext.Provider
      value={{
        userCrendential,
        setUserCrendential,
        newUserCrendential,
        setNewUserCrendential,
        userLoadingButton,
        setUserLoadingButton,
        selectedEvent,
        setSelectedEvent,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("userContext must be used within an UserProvider");
  }
  return context;
};
