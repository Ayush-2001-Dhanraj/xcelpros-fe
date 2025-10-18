"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { authApi } from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";

export default function Header() {
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    await authApi.logout();
    setUser(null);
  };

  return (
    <header className="w-full flex justify-between items-center p-2 ">
      <div className="font-bold">Meal Calorie Counter</div>

      <nav className="flex items-center gap-4">
        <ModeToggle />
        {!user ? (
          <>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          </>
        ) : (
          <>
            <Link href="/history" className="hover:underline">
              History
            </Link>
            <button className="hover:underline" onClick={() => handleLogout()}>
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
