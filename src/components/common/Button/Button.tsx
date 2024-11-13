import { Loader2 } from "lucide-react";
import { Button as ShadcnButton } from "../../ui/button";
import { ButtonProps } from "./Button.types";

export const Button = ({ isLoading, children, ...props }: ButtonProps) => (
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
