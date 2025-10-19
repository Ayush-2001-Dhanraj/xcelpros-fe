import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Meal Calorie Count Generator",
  description:
    "Track and calculate the calorie content of your meals. Search dishes, input servings, and get detailed nutrition info from USDA FoodData Central.",
  keywords: [
    "calorie counter",
    "meal tracker",
    "nutrition",
    "USDA",
    "food calories",
    "health",
  ],
  authors: [
    { name: "Ayush Dhanraj", url: "https://github.com/Ayush-2001-Dhanraj" },
  ],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Meal Calorie Count Generator",
    description:
      "Track and calculate the calorie content of your meals with ease.",
    siteName: "Meal Calorie Count Generator",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen overflow-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow overflow-auto p-4">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
