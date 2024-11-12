import { useLogoutUser } from "@/api/hooks/auth.hooks";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUserStore } from "@/stores/user";
import { User } from "lucide-react";

export const UserInfo = () => {
  const { name, surname, email } = useUserStore();
  const { mutate: logout } = useLogoutUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex items-center">
          <Avatar className="bg-primary flex justify-center items-center h-[60px] w-[60px]">
            <User className="stroke-secondary h-[40px] w-[40px]" />
          </Avatar>
          <div className="flex flex-col items-start px-5">
            <div className="text-primary font-medium">
              {name} {surname}
            </div>
            <div className="text-gray-400">{email}</div>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <Button variant="destructive" onClick={handleLogout}>
          Logout
        </Button>
      </PopoverContent>
    </Popover>
  );
};
