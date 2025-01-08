import { LogOut } from "lucide-react";
import { FormattedMessage } from "react-intl";
import { Button } from "@/components/ui/button";
import { useLogoutUser } from "@/api/hooks/auth.hooks";
import { AlertDialog } from "@/components/common/AlertDialog";

export const Logout = () => {
  const { isPending, mutate: logout } = useLogoutUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <AlertDialog
      onOk={handleLogout}
      isLoading={isPending}
      title={<FormattedMessage id="component.are-you-sure" />}
      description={<FormattedMessage id="component.do-you-want-to-log-out" />}
      trigger={
        <Button
          className={
            "flex items-center justify-start text-xl gap-3  bg-transparent rounded-lg px-3 py-4 my-2 w-full h-full text-red-500 transition-colors hover:bg-secondary"
          }
        >
          <LogOut className="!w-auto !h-auto" />
          <FormattedMessage id="component.logout" />
        </Button>
      }
    />
  );
};
