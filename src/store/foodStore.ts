import { create } from "zustand";
import { foodApi } from "@/lib/api";
import { toast } from "sonner";
import { userStore } from "./userStore";

export interface FoodItem {
    name: string;
    brand: string;
    fdcId: string;
}

interface Nutrient {
    name: string;
    amount: number;
    unit: string;
}

export interface FoodDetails {
    dish_name: string;
    servings: number;
    calories_per_serving: number;
    total_calories: number;
    micronutrients: Nutrient[];
    source: string;
}

interface FoodState {
    loading: boolean;
    results: FoodItem[];
    selected: FoodDetails | null;
    searchFoods: (query: string) => Promise<void>;
    fetchDetails: (dish_name: string, servings: number) => Promise<void>;
    clearSelected: () => void;
    reset: () => void;
}

export const useFoodStore = create<FoodState>((set) => ({
    loading: false,
    results: [],
    selected: null,
    reset: () => set({ results: [], selected: null }),
    searchFoods: async (query: string) => {
        if (!query.trim()) return set({ results: [] });
        set({ loading: true });
        try {
            const data = await foodApi.searchDishes(query);
            set({ results: data.results });

        } catch (error: unknown) {
            if (error instanceof Error) {
                set({ results: [] });
                toast.error(error.message);
            } else {
                toast.error("An unexpected error occurred.");
            }
        } finally {
            set({ loading: false });
        }
    },
    fetchDetails: async (dish_name: string, servings: number = 1) => {
        set({ loading: true });
        try {
            const data = await foodApi.getDishDetails(dish_name, servings);
            set({ selected: data });
            userStore.getState().addToHistory(data)
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("An unexpected error occurred.");
            }
        } finally {
            set({ loading: false });
        }
    },
    clearSelected: () => set({ selected: null }),
}));
