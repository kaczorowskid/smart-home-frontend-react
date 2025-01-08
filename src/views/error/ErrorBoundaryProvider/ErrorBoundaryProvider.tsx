import { ErrorBoundary } from "react-error-boundary";
import { FallbackComponent } from "./FallbackComponent";
import { type ErrorBoundaryProviderProps } from "./ErrorBoundaryProvider.types";

export const ErrorBoundaryProvider = ({
  children,
}: ErrorBoundaryProviderProps) => (
  <ErrorBoundary FallbackComponent={FallbackComponent}>
    {children}
  </ErrorBoundary>
);
