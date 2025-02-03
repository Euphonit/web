"use client";
import { useRouter } from "next/navigation";

export default function NavButton({ content, local }) {
  const router = useRouter();

  function handleClick() {
    router.push(local);
  }

  return <button onClick={handleClick}>{content}</button>;
}
