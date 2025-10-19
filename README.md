# 💻 Meal Calorie Frontend

This repository contains the frontend client application, a modern, responsive web application designed for tracking and calculating meal calorie and nutrient content. It communicates with the Meal Calorie REST API (provided separately) to handle authentication and fetch food data from the USDA FoodData Central.

---

## Technology Stack

This project is built using the **T3 Stack** principles for a modern, type-safe, and highly performant frontend experience.

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | React framework for routing, rendering, and server-side logic (middleware). |
| **Language** | TypeScript | Ensures type safety and improves code quality. |
| **Styling** | Tailwind CSS | Utility-first CSS framework for rapid UI development and responsiveness. |
| **UI Components** | Shadcn/ui & Radix-UI | Highly accessible, customizable UI components. |
| **State Management** | Zustand | Simple, fast, and scalable state management. |
| **Form Handling** | React Hook Form & Zod | Efficient form management with schema validation. |
| **Animation** | Framer Motion | Smooth, modern page transitions and component animations. |
| **HTTP Client** | Axios | Promises-based HTTP client for API interaction. |

---

## Key Features

* **Authentication Flow:** Complete **Register**, **Login**, and **Protected Routing** implemented using Next.js Middleware and custom authentication hooks (`useAuth.ts`).
* **Meal Search & Calculation:**
    * **Debounced Search:** Uses a debounced input to query the backend API efficiently for food items.
    * **Calorie Details:** Displays comprehensive calorie, macronutrient, and micronutrient information based on user-specified servings.
* **Persistent State:** Utilizes **Zustand** for global state management of authentication (`authStore.ts`) and food search results/details (`foodStore.ts`).
* **User Interface:**
    * **Theme Toggle:** Supports Light/Dark mode using `next-themes`.
    * **Responsive Design:** Optimized for mobile and desktop viewports.
* **History Tracking:** A dedicated **History page** displays a reversed list of previously searched and calculated meals using `userStore`.

---

## Project Structure

The application follows the Next.js App Router convention with a clear separation of concerns under the `src/` directory.

![Screenshot 2025-10-19 163348](https://github.com/user-attachments/assets/71f064c1-15e1-4161-a5d4-ec336fa15eef)
![Screenshot 2025-10-19 163335](https://github.com/user-attachments/assets/e72c855c-5f9c-47dd-9f3c-bc187c4d94fe)

