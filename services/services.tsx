import axios from "axios";
import { crendentialType } from "@/app/interface/interface";

export const userLoginRequest = async (userCrendential: crendentialType) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_USER_LOGIN_API_ENDPOINT}`,
    userCrendential
  );
  return response;
};

export const createAccountRequest = async (newUser: crendentialType) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_CREATE_ACCOUNT_ENDPOINT}`,
    newUser
  );
  return response;
};
