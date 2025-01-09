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

  return (
    <UserContext.Provider value={{ userCrendential, setUserCrendential }}>
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
