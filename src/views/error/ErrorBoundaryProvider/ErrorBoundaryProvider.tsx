import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryProviderProps } from "./ErrorBoundaryProvider.types";
import { FallbackComponent } from "./FallbackComponent";

export const ErrorBoundaryProvider = ({
  children,
}: ErrorBoundaryProviderProps) => (
  <ErrorBoundary FallbackComponent={FallbackComponent}>
    {children}
  </ErrorBoundary>
);
