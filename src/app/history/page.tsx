"use client";

import { userStore } from "@/store/userStore";
import { ScrollArea } from "@/components/ui/scroll-area";
import CalorieDetails, { MODE } from "@/components/calorie-details";

export default function History() {
  const { history } = userStore();

  if (!history.length) {
    return (
      <div className="flex flex-col items-center justify-center text-center p-4">
        <p className="text-muted-foreground text-lg mb-2">No history yet.</p>
        <p className="text-sm text-muted-foreground">
          Start adding dishes to see your calorie history here!
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">History</h1>
      <ScrollArea className="h-[70vh]">
        <div className="space-y-3">
          {history
            .slice()
            .reverse()
            .map((food, idx) => (
              <CalorieDetails
                selected={food}
                selectedMode={MODE.compact}
                key={idx}
              />
            ))}
        </div>
      </ScrollArea>
    </div>
  );
}
