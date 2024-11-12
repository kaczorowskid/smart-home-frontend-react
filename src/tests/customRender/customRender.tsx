import { ThemeProvider } from "@/contexts/ThemeContext/ThemeContext.provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { act, render } from "@testing-library/react";
import type { RenderResult } from "@testing-library/react";
import { type ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppWithProvidersProps, Options } from "./customRender.types";
import { defaultStore, queryClient } from "./customRender.consts";
import { useUserStore } from "@/stores/user";

const AppWithProviders = ({ ui }: AppWithProvidersProps): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <BrowserRouter>{ui}</BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
);

const customRender = (ui: ReactElement, options?: Options): RenderResult => {
  act(() => {
    useUserStore.setState(
      {
        ...defaultStore,
        ...options?.initialState,
      },
      false
    );
  });

  return render(<AppWithProviders ui={ui} />);
};

export * from "@testing-library/react";

export { customRender as renderWithProviders };
