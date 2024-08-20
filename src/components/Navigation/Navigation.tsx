import { menuItems } from "./Navigation.data";
import { NavigationItem } from "./components/NavigationItem/NavigationItem";
import { UserInfo } from "./components/UserInfo/UserInfo";

export const Navigation = () => {
  return (
    <div className="w-[300px] fixed">
      <UserInfo firstName="Test" secondName="Account" />
      <nav className="px-2 text-lg font-medium lg:px-4">
        {menuItems.map(({ title, path, icon }) => (
          <NavigationItem key={title} title={title} icon={icon} path={path} />
        ))}
      </nav>
    </div>
  );
};
