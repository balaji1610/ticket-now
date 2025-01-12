"use client";
import { useUserContext } from "@/app/context/userContext";

export default function Logout() {
  const { currentUser } = useUserContext();

  return (
    <div>
      <h1>{currentUser.username}</h1>
      Logout
    </div>
  );
}
