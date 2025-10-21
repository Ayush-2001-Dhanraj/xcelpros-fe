"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { authApi } from "@/lib/api";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useAuthStore } from "@/store/authStore";
import Lottie from "react-lottie";
import butterflyDark from "@/animations/butterfly1.json";
import butterflyLight from "@/animations/butterfly2.json";

export default function Header() {
  const { user, setUser, loading } = useAuthStore();
  const { theme } = useTheme();

  const loginAnimeOptions = {
    loop: true,
    autoplay: true,
  };

  const handleLogout = async () => {
    await authApi.logout();
    setUser(null);
  };

  const dropdownBg = theme === "dark" ? "bg-gray-800" : "bg-white";
  const dropdownText = theme === "dark" ? "text-white" : "text-foreground";

  return (
    <>
      <div className="absolute inset-0 -z-10">
        {theme === "dark" ? (
          <Lottie
            key={theme}
            options={{ ...loginAnimeOptions, animationData: butterflyDark }}
            height="100%"
            width="100%"
          />
        ) : (
          <Lottie
            key={theme}
            options={{
              ...loginAnimeOptions,
              animationData: butterflyLight,
            }}
            height="100%"
            width="100%"
          />
        )}
        <div className="absolute inset-0  backdrop-blur-sm"></div>
      </div>
      <header className="w-full flex items-center p-4 border-b border-border">
        {/* App name */}
        <Link href="/" className="text-lg font-bold hover:underline flex-1">
          Meal Calorie Counter
        </Link>

        <div className="hidden md:block text-center text-xs">
          <p>Ayush Dhanraj &bull; dhanrajaayush123@gmail.com</p>
        </div>

        <div className="flex justify-end items-center gap-2 flex-1">
          <ModeToggle />

          {!loading && (
            <>
              {!user ? (
                <Link href="/login">
                  <Button variant="outline" size="sm">
                    Login
                  </Button>
                </Link>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Menu
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className={`${dropdownBg} ${dropdownText} border border-border rounded-md shadow-lg`}
                    forceMount
                  >
                    <DropdownMenuItem asChild>
                      <Link href="/home">Home</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/history">History</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </>
          )}
        </div>
      </header>
    </>
  );
}
