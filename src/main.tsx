import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "./components/ui/sonner.tsx";
import { Routes } from "./routes/Routes.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/queryClient.ts";
import { ThemeProvider } from "./contexts/Theme/Theme.provider.tsx";
import { LocalizationProvider } from "./contexts/Localization/Localization.provider.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LocalizationProvider>
          <Routes />
          <Toaster position="bottom-right" />
        </LocalizationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
