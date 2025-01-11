import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  adminLoginRequest,
  createEventRequest,
} from "../../../services/services";
import { useAdminContext } from "@/app/context/adminContext";
import eventRecord from "@/app/utils/eventRecord";

export default function UserService() {
  const {
    adminCrendential,
    setAdminLoadingButton,
    singleEventRecord,
    setSingleEventRecord,
    setIsAddEventOpen,
  } = useAdminContext();
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const adminLogin = async () => {
    try {
      setAdminLoadingButton(true);
      const response = await adminLoginRequest(adminCrendential);
      if (response.status === 200) {
        toast.success(response.data.message ?? "Admin Login Success");
        setAdminLoadingButton(false);
      }
    } catch (err) {
      console.log(err);
      toast.error((err as any).response.data.message ?? "Login Failed");
      setAdminLoadingButton(false);
      // eslint-disable-next-line
    }
  };

  const createEvent = async () => {
    try {
      setAdminLoadingButton(true);
      const response = await createEventRequest(singleEventRecord);
      if (response.status === 200) {
        toast.success(response.data.message ?? "Event Created");
        setAdminLoadingButton(false);
        await delay(2000);
        setIsAddEventOpen(false);
        setSingleEventRecord(eventRecord);
      }
    } catch (err) {
      console.log(err);
      toast.error(
        (err as any).response.data.message ?? "Something Went Wrong !"
      );
      setSingleEventRecord(eventRecord);
      setIsAddEventOpen(false);
    }
  };

  return {
    adminLogin,
    createEvent,
  };
}
