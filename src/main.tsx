import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "./components/ui/sonner.tsx";
import { Routes } from "./routes/Routes.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/queryClient.ts";
import { ThemeProvider } from "./contexts/ThemeContext/ThemeContext.provider.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Routes />
        <Toaster position="top-center" richColors />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
