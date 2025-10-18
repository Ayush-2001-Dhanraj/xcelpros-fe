import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true,
});

api.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err.response?.data?.msg) {
            return Promise.reject(new Error(err.response.data.msg));
        }
        return Promise.reject(err);
    }
);

/** ---------------- Auth APIs ---------------- */
export const authApi = {
    login: (email: string, password: string) =>
        api.post("/auth/login", { email, password }).then(res => res.data),

    register: (name: string, email: string, password: string) =>
        api.post("/auth/register", { name, email, password }).then(res => res.data),

    logout: () =>
        api.delete("/auth/logout").then(res => res.data),

    resetPassword: (email: string, password: string) =>
        api.post("/auth/reset-password", { email, password }).then(res => res.data),

};

/** ---------------- User APIs ---------------- */
export const userApi = {
    getMe: () =>
        api.get("/user").then(res => res.data)
};
