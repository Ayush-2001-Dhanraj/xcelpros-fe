"use client";

import { FoodItem, useFoodStore } from "@/store/foodStore";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface FoodCard {
  food: FoodItem;
  servings: number;
}

const FoodCard = ({ food, servings }: FoodCard) => {
  const { fetchDetails } = useFoodStore();
  return (
    <Button
      onClick={() => fetchDetails(food.name, servings)}
      className="flex w-full items-center justify-between hover:bg-muted/60 transition-colors text-left"
    >
      <div className="flex-1 min-w-0">
        <p className="font-medium text-foreground truncate" title={food.name}>
          {food.name}
        </p>
        <p
          className="text-xs text-muted-foreground truncate"
          title={food.brand}
        >
          {food.brand}
        </p>
      </div>
      <ChevronRight className="text-muted-foreground" />
    </Button>
  );
};

export default FoodCard;
