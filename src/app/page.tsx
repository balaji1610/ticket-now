"use client";
import { useUserContext } from "./context/userContext";
import { useRouter } from "next/navigation";
export default function Home() {
  const { user } = useUserContext();
  const router = useRouter();
  const bookingTitle = "anirudh_show";
  return (
    <div>
      <h1>{user}</h1>
      <button onClick={() => router.push(`/events`)}>Events</button>
      <button onClick={() => router.push(`/events/${bookingTitle}`)}>
        Go to booking
      </button>
    </div>
  );
}
