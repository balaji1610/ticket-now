"use client";
import { useUserContext } from "./context/userContext";
export default function Home() {
  const { user } = useUserContext();
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
}
