import { create } from "zustand";

interface User {
    name: string;
    email: string;
}

interface AuthState {
    user: User | null;
    setUser: (user: User | null) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    loading: false,
    setLoading: (loading) => set({ loading }),
}));
