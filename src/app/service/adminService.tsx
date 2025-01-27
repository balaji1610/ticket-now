import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  adminLoginRequest,
  createEventRequest,
  getAllEventsRequest,
  updateEventRequest,
  deleteEventRequest,
} from "../../../services/services";
import { useAdminContext } from "@/app/context/adminContext";
import eventRecord from "@/app/utils/eventRecord";
import { useRouter } from "next/navigation";

export default function UserService() {
  const router = useRouter();
  const {
    adminCrendential,
    setAdminLoadingButton,
    singleEventRecord,
    setSingleEventRecord,
    setIsAddEventOpen,
    setAllEvents,
    setIsLoading,
    setIsEdit,
    setUpdateEventId,
    updateEventId,
    setIsDeleteLoadingButton,
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
        router.push("./admin/dashboard");
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
        getAllEvents();
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
  //updateEvent
  const updateEvent = async () => {
    try {
      setAdminLoadingButton(true);

      const response = await updateEventRequest(
        updateEventId,
        singleEventRecord
      );
      if (response.status === 200) {
        toast.success(response.data.message ?? "Updated");
        setAdminLoadingButton(false);
        await delay(2000);
        getAllEvents();
        setIsAddEventOpen(false);
        setSingleEventRecord(eventRecord);
        setIsEdit(false);
        setUpdateEventId("");
      }
    } catch (err) {
      console.log(err);
      toast.error(
        (err as any).response.data.message ?? "Something Went Wrong !"
      );
      setAdminLoadingButton(false);
      setSingleEventRecord(eventRecord);
      setIsAddEventOpen(false);
      setIsEdit(false);
      setUpdateEventId("");
    }
  };

  const deleteEvent = async (deleteEventId: string) => {
    try {
      setIsDeleteLoadingButton(true);
      const response = await deleteEventRequest(deleteEventId);
      if (response.status === 200) {
        toast.success(response.data.message ?? "Deleted");
        setIsDeleteLoadingButton(false);
        await delay(2000);
        getAllEvents();
      }
    } catch (err) {
      console.log(err);
      toast.error(
        (err as any).response.data.message ?? "Something Went Wrong !"
      );
      setIsDeleteLoadingButton(false);
    }
  };

  const getAllEvents = async () => {
    try {
      setIsLoading(true);
      const response = await getAllEventsRequest();
      if (response.status === 200) {
        setAllEvents(response.data.reverse());
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    adminLogin,
    createEvent,
    getAllEvents,
    updateEvent,
    deleteEvent,
  };
}
