import type { RenderResult } from "@testing-library/react";
import messages from "@/langs/en";
import { type ReactElement } from "react";
import { IntlProvider } from "react-intl";
import { useUserStore } from "@/stores/user";
import { BrowserRouter } from "react-router-dom";
import { act, render } from "@testing-library/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/contexts/Theme/Theme.provider";
import { defaultStore, createTestQueryClient } from "./customRender.consts";
import { type Options, type AppWithProvidersProps } from "./customRender.types";

const AppWithProviders = ({ ui }: AppWithProvidersProps): JSX.Element => {
  const queryClient = createTestQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider locale="en" messages={messages}>
        <ThemeProvider>
          <BrowserRouter>{ui}</BrowserRouter>
        </ThemeProvider>
      </IntlProvider>
    </QueryClientProvider>
  );
};

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
