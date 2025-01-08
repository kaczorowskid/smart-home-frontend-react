import { useState } from "react";
import { cn } from "@/lib/utils";
import { X, Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Logout } from "./Logout";
import { UserInfo } from "./UserInfo";
import { menuItems } from "./Navigation.const";
import { NavigationItem } from "./NavigationItem";
import { PermissionsWrapper } from "../PermissionsWrapper";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={cn(
        "px-4 bg-background z-10 w-full lg:mt-5 lg:fixed lg:w-[300px] lg:h-full",
        isOpen ? "h-full fixed" : "h-[100px] block"
      )}
    >
      <div className="w-full flex items-center justify-between py-5">
        <UserInfo />
        {isOpen ? (
          <X onClick={handleCloseMenu} className="block lg:hidden" />
        ) : (
          <Menu onClick={handleOpenMenu} className="block lg:hidden" />
        )}
      </div>
      <nav
        className={cn(
          "text-lg font-medium  lg:block",
          isOpen ? "block" : "hidden"
        )}
      >
        {menuItems.map((item) => (
          <PermissionsWrapper key={item.path} permissions={item.permissions}>
            <NavigationItem items={{ ...item }} onClick={handleCloseMenu} />
          </PermissionsWrapper>
        ))}
        <Separator />
        <Logout />
      </nav>
    </div>
  );
};
