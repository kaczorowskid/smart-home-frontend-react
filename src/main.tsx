import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { Routes } from "./routes/Routes.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import { queryClient } from "./utils/queryClient.ts";
import { ThemeProvider } from "./contexts/Theme/Theme.provider.tsx";
import { LocalizationProvider } from "./contexts/Localization/Localization.provider.tsx";
import { ErrorBoundaryProvider } from "./views/error/ErrorBoundaryProvider/ErrorBoundaryProvider.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LocalizationProvider>
          <ErrorBoundaryProvider>
            <Routes />
          </ErrorBoundaryProvider>
          <Toaster position="bottom-right" />
        </LocalizationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
