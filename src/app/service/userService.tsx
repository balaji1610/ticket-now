import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import {
  userLoginRequest,
  createAccountRequest,
} from "../../../services/services";
import { useUserContext } from "@/app/context/userContext";

export default function UserService() {
  const router = useRouter();
  const {
    userCrendential,
    newUserCrendential,
    setUserLoadingButton,
    setCurrentUser,
  } = useUserContext();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  //login
  const userLogin = async () => {
    try {
      setUserLoadingButton(true);
      const response = await userLoginRequest(userCrendential);
      if (response.status === 200) {
        toast.success(response.data.message ?? "Login Success");

        setCurrentUser(response.data.result);
        setUserLoadingButton(false);
        await delay(2000);
        router.push("./events");
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
