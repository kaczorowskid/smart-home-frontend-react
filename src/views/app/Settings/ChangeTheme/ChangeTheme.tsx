import { Card, CardContent } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useTheme } from "@/contexts/Theme/Theme.hooks";
import { Moon, Sun } from "lucide-react";
import { FormattedMessage } from "react-intl";

export const ChangeTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Card className="w-full mb-5">
      <CardContent className="flex min-h-32 items-center justify-between p-5">
        <span className="text-2xl">
          <FormattedMessage id="view.change-theme" />
        </span>
        <ToggleGroup
          type="single"
          defaultValue={theme}
          onValueChange={setTheme}
        >
          <ToggleGroupItem value="light" disabled={theme === "light"}>
            <Sun />
          </ToggleGroupItem>
          <ToggleGroupItem value="dark" disabled={theme === "dark"}>
            <Moon />
          </ToggleGroupItem>
        </ToggleGroup>
      </CardContent>
    </Card>
  );
};
