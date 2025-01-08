import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { routesPath } from "@/routes/routesPath";
import { useQueryClient } from "@tanstack/react-query";
import { type FallbackProps } from "react-error-boundary";

export const FallbackComponent = ({
  error,
  resetErrorBoundary,
}: FallbackProps): JSX.Element => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  console.error(error);

  const handleOnReset = (): void => {
    queryClient.clear();
    resetErrorBoundary();
  };

  const handleGoToDashboard = () => {
    navigate(routesPath.app.dashboard);
  };

  return (
    <div className="w-full h-screen flex flex-col gap-10 place-items-center justify-center">
      <p className="text-6xl">
        <FormattedMessage id="view.something-went-wrong" />
      </p>
      <p className="text-red-500 text-4xl font-bold">{error}</p>
      <div className="flex gap-5">
        <Button onClick={handleOnReset}>
          <FormattedMessage id="view.try-again" />
        </Button>
        <Button onClick={handleGoToDashboard}>
          <FormattedMessage id="view.go-to-dashboard" />
        </Button>
      </div>
    </div>
  );
};
