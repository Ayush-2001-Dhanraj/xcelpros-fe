import { create } from "zustand";
import { FoodDetails } from "./foodStore";

interface UserState {
    history: FoodDetails[];
    addToHistory: (food: FoodDetails) => void;
}

export const userStore = create<UserState>((set) => ({
    history: [],
    addToHistory: (food: FoodDetails) =>
        set((state) => ({ history: [...state.history, food] })),
}));
