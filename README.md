# 💻 Meal Calorie Frontend

[Live Link ✈](https://xcelpros-fe-amber.vercel.app/)


This repository contains the frontend client application, a modern, responsive web application designed for tracking and calculating meal calorie and nutrient content. It communicates with the Meal Calorie REST API (provided separately) to handle authentication and fetch food data from the USDA FoodData Central.

---
## App Screenshots

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/fbea19f8-d658-4885-bf85-a9e4c13efbc1" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/69841b41-acac-49f1-ac20-80a4348b5af8" width="400"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/826d0184-94bd-4816-9a13-4a443cbacdc1" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/0b42c542-d3f4-45b5-85a2-958594697eb8" width="400"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/2119ea1b-bb61-4881-a884-c53060642be8" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/06998c55-5a21-4fa9-b462-20ec7f71db8b" width="400"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/e3bb3075-2054-442b-89a0-14a1ac63e10c" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/4d701988-f348-4312-aac4-d58cca8a01ad" width="400"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/d41733ef-7476-444b-8e27-1fb4f1b7b784" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/271294b3-66f5-4b16-94e4-e0eaaf47db94" width="400"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/f37b6f6e-35f7-4c85-8af3-774236d6a774" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/d4147394-6b17-4591-a720-9e15bb5f0810" width="400"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/7e5c3a49-baa5-4459-a792-a98cd29045f4" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/21ea4b13-32a8-4515-880e-ba5be72a58ae" width="400"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/a3ab0948-63d6-43b2-b8e0-9299609f43b4" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/a92e7395-75b7-48d4-b89a-23a3b693bcc2" width="400"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/d6d47e06-4cc9-425c-9f03-53964e46927d" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/7550096a-ccc0-4d80-9011-85e415c410b4" width="400"></td>
  </tr>
</table>



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

