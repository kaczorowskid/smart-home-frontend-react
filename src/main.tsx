import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "./components/ui/sonner.tsx";
import { Routes } from "./routes/Routes.tsx";
import { ThemeProvider } from "./components/ThemeProvider.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/queryClient.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <Routes />
        <Toaster position="top-right" richColors />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
