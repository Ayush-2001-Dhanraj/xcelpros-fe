"use client";

import { useEffect, useMemo, useState } from "react";
import { useFoodStore } from "@/store/foodStore";
import { debounce } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import CalorieDetails from "@/components/calorie-details";
import FoodCard from "@/components/food-card";
import CustomSpinner from "@/components/ui/CustomSpinner";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/hooks/useAuth";

export default function HomePage() {
  const { user, loading: userLoading } = useAuth();
  const router = useRouter();
  const {
    results,
    loading,
    selected,
    searchFoods,
    clearSelected,
    reset,
    fetchDetails,
  } = useFoodStore();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [servings, setServings] = useState<number>(1);

  useEffect(() => {
    if (!userLoading && !user) router.push("/login");
  }, [user, userLoading, router]);

  useEffect(() => {
    if (user) {
      reset();
    }
  }, [router, user]);

  useEffect(() => {
    if (selected) {
      fetchDetails(selected.fdcId, servings);
    }
  }, [servings]);

  const debouncedSearch = useMemo(
    () => debounce(searchFoods, 400),
    [searchFoods]
  );

  const handleChangeSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selected) {
      clearSelected();
    }
    setSearchTerm(e.target.value);
    debouncedSearch(e.target.value);
  };

  const handleChangeServings = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setServings(value < 1 ? 1 : value);
  };

  if (userLoading)
    return (
      <div className="flex items-center justify-center">
        <CustomSpinner />
      </div>
    );

  if (!user) return null;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="flex gap-2 mb-2">
        <Input
          value={searchTerm}
          onChange={handleChangeSearchTerm}
          placeholder="Search a dish..."
          className="flex-1"
          disabled={!!selected}
        />
        <Input
          type="number"
          min={1}
          value={servings}
          onChange={handleChangeServings}
          placeholder="1"
          className="w-20"
          disabled={!!selected && loading}
        />
      </div>

      {!selected ? (
        <>
          {loading && (
            <div className="flex justify-center mt-4">
              <CustomSpinner />
            </div>
          )}
          {!loading && results.length > 0 && (
            <ScrollArea className="h-[60vh] border rounded-xl shadow-sm divide-border">
              <Card className="border rounded-xl shadow-sm  divide-border">
                <AnimatePresence>
                  {results.map((food) => (
                    <motion.div
                      key={food.fdcId}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                    >
                      <FoodCard food={food} servings={servings} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </Card>
            </ScrollArea>
          )}

          {!loading && !results.length && searchTerm && (
            <p className="text-center text-muted-foreground text-sm">
              No dishes found for “{searchTerm}”
            </p>
          )}
        </>
      ) : (
        <CalorieDetails clearSelected={clearSelected} selected={selected} />
      )}
    </div>
  );
}
