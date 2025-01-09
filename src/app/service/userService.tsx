import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { userLoginRequest } from "../../../services/services";
import { useUserContext } from "@/app/context/userContext";

export default function UserService() {
  const { userCrendential } = useUserContext();

  const userLogin = async () => {
    try {
      const response = await userLoginRequest(userCrendential);
      if (response.status === 200) {
        toast.success(response.data.message ?? "Login Success");
      }
    } catch (err) {
      console.log(err);
      toast.error((err as any).response.data.message ?? "Login Failed");
      // eslint-disable-next-line
    }
  };

  return {
    userLogin,
  };
}
