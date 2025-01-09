import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { adminLoginRequest } from "../../../services/services";
import { useAdminContext } from "@/app/context/adminContext";

export default function UserService() {
  const { adminCrendential } = useAdminContext();

  const adminLogin = async () => {
    adminCrendential;


    try {
      const response = await adminLoginRequest(adminCrendential);
      if (response.status === 200) {
        toast.success(response.data.message ?? "Admin Login Success");
      }
    } catch (err) {
      console.log(err);
      toast.error((err as any).response.data.message ?? "Login Failed");
      // eslint-disable-next-line
    }
  };

  return {
    adminLogin,
  };
}
