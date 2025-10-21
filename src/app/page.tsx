"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Root() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-background h-full">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Welcome to Meal Calorie Counter
      </h1>

      <p className="text-muted-foreground mb-6 text-center">
        Track calories, manage your meals, and see nutrient breakdowns easily.
      </p>

      <div className="flex gap-4 mb-6">
        <Link href="/login" passHref>
          <Button variant="outline">Lets Go</Button>
        </Link>
      </div>
    </div>
  );
}
