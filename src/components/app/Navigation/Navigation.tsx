import { menuItems } from "./Navigation.const";
import { NavigationItem } from "./NavigationItem";
import { UserInfo } from "./UserInfo";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
        "bg-background z-10 w-full lg:mt-5 lg:fixed lg:w-[300px] lg:h-full",
        isOpen ? "h-full fixed" : "h-[100px] block"
      )}
    >
      <div className="w-full flex items-center justify-between py-5 px-5">
        <UserInfo />
        {isOpen ? (
          <X className="block lg:hidden" onClick={handleCloseMenu} />
        ) : (
          <Menu className="block lg:hidden" onClick={handleOpenMenu} />
        )}
      </div>
      <nav
        className={cn(
          "px-2 text-lg font-medium lg:px-4 lg:block",
          isOpen ? "block" : "hidden"
        )}
      >
        {menuItems.map((item) => (
          <NavigationItem items={{ ...item }} onClick={handleCloseMenu} />
        ))}
      </nav>
    </div>
  );
};
