"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  console.log(user);
  console.log(!loading && !user);

  useEffect(() => {
    if (!loading && !user) {
      toast.error("Please login to access this page");
      router.push("/login");
    }
  }, [user, loading, router]);

  return <div>This is the Home Page</div>;
}
