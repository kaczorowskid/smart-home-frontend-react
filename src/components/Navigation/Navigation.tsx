import { useTheme } from "@/contexts/ThemeContext/ThemeContext.hooks";
import { menuItems } from "./Navigation.const";
import { NavigationItem } from "./NavigationItem";
import { UserInfo } from "./UserInfo";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Moon, Sun } from "lucide-react";

export const Navigation = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-[300px] h-full fixed">
      <UserInfo firstName="Test" secondName="Account" />
      <nav className="px-2 text-lg font-medium lg:px-4">
        {menuItems.map(({ title, path, icon }) => (
          <NavigationItem key={title} title={title} icon={icon} path={path} />
        ))}
      </nav>

      <ToggleGroup
        className="absolute right-1/2 translate-x-1/2 bottom-5"
        type="single"
        defaultValue={theme}
        onValueChange={setTheme}
      >
        <ToggleGroupItem value="light">
          <Sun />
        </ToggleGroupItem>
        <ToggleGroupItem value="dark">
          <Moon />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};
