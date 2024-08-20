import { Avatar } from "@/components/ui/avatar";
import { UserInfoProps } from "./UserInfo.types";

export const UserInfo = ({ firstName, secondName }: UserInfoProps) => {
  return (
    <div className="flex items-center py-9 px-4">
      <Avatar className="bg-gray-500 flex justify-center items-center h-[60px] w-[60px]">
        {firstName.at(0)?.toUpperCase()}
        {secondName.at(0)?.toUpperCase()}
      </Avatar>
      <div className="px-5">
        <div className="text-gray-200 font-medium">
          {firstName} {secondName}
        </div>
        <div className="text-gray-400">test@test.com</div>
      </div>
    </div>
  );
};
