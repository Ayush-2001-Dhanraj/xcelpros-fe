"use client";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/header";
import { useAuth } from "@/hooks/useAuth";
import CustomSpinner from "@/components/ui/CustomSpinner";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { loading } = useAuth();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col h-[100vh] overflow-hidden relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 overflow-auto p-4">
            {loading ? <SpinnerView /> : children}
          </main>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}

function SpinnerView() {
  return (
    <div className="h-[60vh] flex items-center justify-center">
      <CustomSpinner />
    </div>
  );
}
