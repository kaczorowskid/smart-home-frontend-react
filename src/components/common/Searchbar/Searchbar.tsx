import { useIntl } from "react-intl";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { type SearchbarProps } from "./Searchbar.types";

export const Searchbar = ({
  searchbarValue,
  setSearchbarValue,
}: SearchbarProps) => {
  const intl = useIntl();

  return (
    <div className="relative flex flex-row-reverse ">
      <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        value={searchbarValue}
        onChange={(value) => setSearchbarValue(value.target.value)}
        className="w-[130px] rounded-lg pl-8 md:w-[200px] lg:w-[336px]"
        placeholder={intl.formatMessage({ id: "component.search-placeholder" })}
      />
    </div>
  );
};
