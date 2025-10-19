import axios from "axios";


export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
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

// auth APIs
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

// user APIs
export const userApi = {
    getMe: () =>
        api.get("/user").then(res => res.data)
};

// food APIs
export const foodApi = {
    searchDishes: (query: string) =>
        api.get("/food/search", { params: { query } }).then((res) => res.data),
    getDishDetails: (dish_name: string, servings = 1) =>
        api.post("/food/get-calories", { dish_name, servings }).then((res) => res.data),
};