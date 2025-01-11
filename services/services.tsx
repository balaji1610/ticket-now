import axios from "axios";
import { crendentialType } from "@/app/interface/interface";

//User Requests
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

//Admin Requests
export const adminLoginRequest = async (adminCrendential: crendentialType) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_ADMIN_LOGIN_API_ENDPOINT}`,
    adminCrendential
  );
  return response;
};

//createEvent

export const createEventRequest = async (newEvent: any) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_ADMIN_CREATE_EVENT_ENDPOINT}`,
    newEvent
  );
  return response;
};
