import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export default function Root() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Welcome to Meal Calorie Counter</h1>
      <div className="flex gap-4">
        <Link href="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
        <Link href="/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </div>
      <ModeToggle />
    </div>
  );
}
