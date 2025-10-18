import { userApi } from "@/lib/api";
import { useAuthStore } from "@/store/authStore";
import React from "react";

export function useAuth() {
    const { user, setUser, loading, setLoading } = useAuthStore();

    React.useEffect(() => {
        setLoading(true);
        userApi.getMe()
            .then((data) => setUser(data.user))
            .catch(() => setUser(null))
            .finally(() => setLoading(false));
    }, [setUser, setLoading]);

    return { user, setUser, loading };
}
