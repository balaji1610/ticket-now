import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  userLoginRequest,
  createAccountRequest,
} from "../../../services/services";
import { useUserContext } from "@/app/context/userContext";

export default function UserService() {
  const { userCrendential, newUserCrendential, setUserLoadingButton } =
    useUserContext();

  const userLogin = async () => {
    try {
      setUserLoadingButton(true);
      const response = await userLoginRequest(userCrendential);
      if (response.status === 200) {
        toast.success(response.data.message ?? "Login Success");
        setUserLoadingButton(false);
      }
    } catch (err) {
      setUserLoadingButton(false);
      console.log(err);
      toast.error((err as any).response.data.message ?? "Login Failed");
      // eslint-disable-next-line
    }
  };
  const createAccount = async () => {
    try {
      setUserLoadingButton(true);
      const response = await createAccountRequest(newUserCrendential);
      if (response.status === 201) {
        toast.success(response.data.message ?? "Account Created");
        setUserLoadingButton(false);
      }
    } catch (err) {
      console.log(err);
      toast.error((err as any).response.data.message ?? "Login Failed");
      setUserLoadingButton(false);
      // eslint-disable-next-line
    }
  };

  return {
    userLogin,
    createAccount,
  };
}
