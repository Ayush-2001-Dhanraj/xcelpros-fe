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

export default function Header() {
  const { user, setUser } = useAuth();
  const { theme } = useTheme();

  const handleLogout = async () => {
    await authApi.logout();
    setUser(null);
  };

  const dropdownBg = theme === "dark" ? "bg-gray-800" : "bg-white";
  const dropdownText = theme === "dark" ? "text-white" : "text-foreground";

  return (
    <header className="w-full flex justify-between items-center p-4 border-b border-border">
      {/* App name */}
      <Link href="/" className="text-lg font-bold hover:underline">
        Meal Calorie Counter
      </Link>

      <div className="flex items-center gap-2">
        <ModeToggle />

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
              <DropdownMenuItem>
                <Link href="/home">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/history">History</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
}
