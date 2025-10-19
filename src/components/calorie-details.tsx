"use client";

import { FoodDetails } from "@/store/foodStore";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Flame, Utensils, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export enum MODE {
  "basic" = "Basic",
  "compact" = "Compact",
}

interface CalorieDetailsProps {
  selected: FoodDetails;
  clearSelected?: () => void;
  selectedMode?: MODE;
}

const CalorieDetails = ({
  clearSelected,
  selected,
  selectedMode = MODE.basic,
}: CalorieDetailsProps) => {
  return (
    <Card className="relative border rounded-2xl shadow-lg animate-in fade-in slide-in-from-bottom-2">
      {selectedMode === MODE.basic && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-0 right-0 text-muted-foreground hover:text-foreground"
          onClick={clearSelected}
        >
          <X className="h-4 w-4" />
        </Button>
      )}

      <CardHeader className="flex flex-row items-center gap-3 border-b pb-3">
        <Utensils className="h-5 w-5 text-primary" />
        <CardTitle className="text-lg font-semibold">
          {selected.dish_name}
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-4 space-y-3">
        {/* Calories Section */}
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Flame className="h-4 w-4 text-orange-500" />
            <span>Calories per serving</span>
          </div>
          <span className="font-semibold text-foreground">
            {selected.calories_per_serving} kcal
          </span>
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">
            Total ({selected.servings} servings)
          </span>
          <span className="font-semibold text-primary">
            {selected.total_calories} kcal
          </span>
        </div>

        <Separator className="my-2" />

        {selectedMode === MODE.basic && (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Info className="h-4 w-4 text-blue-500" />
              <h3 className="text-sm font-medium text-foreground">
                Micronutrients
              </h3>
            </div>

            <ScrollArea className="h-40 pr-3">
              <ul className="text-sm space-y-1">
                {selected.micronutrients.map((n, i) => (
                  <li
                    key={i}
                    className="flex justify-between border-b last:border-0 border-border py-1"
                  >
                    <span className="text-muted-foreground">{n.name}</span>
                    <span className="font-medium text-foreground">
                      {n.amount} {n.unit}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </div>
        )}
      </CardContent>

      {selectedMode === MODE.basic && (
        <CardFooter className="block text-center text-xs text-muted-foreground border-t pt-2">
          Source: {selected.source}
        </CardFooter>
      )}
    </Card>
  );
};

export default CalorieDetails;
