import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLogoutUser } from "@/api/hooks/auth.hooks";
import { AlertDialog } from "@/components/common/AlertDialog";
import { FormattedMessage } from "react-intl";

export const Logout = () => {
  const { mutate: logout, isPending } = useLogoutUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <AlertDialog
      title={<FormattedMessage id="component.are-you-sure" />}
      onOk={handleLogout}
      description={<FormattedMessage id="component.do-you-want-to-log-out" />}
      isLoading={isPending}
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
