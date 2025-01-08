import { Loader2 } from "lucide-react";
import { type ButtonProps } from "./Button.types";
import { Button as ShadcnButton } from "../../ui/button";

export const Button = ({ children, isLoading, ...props }: ButtonProps) => (
  <ShadcnButton disabled={isLoading} {...props}>
    {isLoading && (
      <Loader2
        data-testid="loading-spinner"
        className="mr-2 h-4 w-4 animate-spin"
      />
    )}
    {children}
  </ShadcnButton>
);
