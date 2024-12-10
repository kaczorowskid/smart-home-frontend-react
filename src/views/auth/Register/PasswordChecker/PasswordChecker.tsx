import { Badge } from "@/components/ui/badge";
import { PasswordCheckerProps } from "./PasswordChecker.types";
import { checkPassword, renderColorMapper } from "./PasswordChecker.utils";
import { Tooltip } from "@/components/common/Tooltip";

export const PasswordChecker = ({ password }: PasswordCheckerProps) => (
  <div className="flex py-2">
    {checkPassword(password).map((label, index) => (
      <Tooltip
        triggerComponent={
          <div className="w-[25%] border">
            <Badge
              className={`w-full flex cursor-pointer ${renderColorMapper[index]}`}
            />
          </div>
        }
      >
        {label}
      </Tooltip>
    ))}
  </div>
);
