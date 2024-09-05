import { Avatar } from "@/components/ui/avatar";

import { useUserStore } from "@/stores/user";

export const UserInfo = () => {
  const { name, surname, email } = useUserStore();

  return (
    <div className="flex items-center py-9 px-4">
      <Avatar className="bg-gray-500 flex justify-center items-center h-[60px] w-[60px]">
        {name.at(0)?.toUpperCase()}
        {surname.at(0)?.toUpperCase()}
      </Avatar>
      <div className="px-5">
        <div className="text-gray-200 font-medium">
          {name} {surname}
        </div>
        <div className="text-gray-400">{email}</div>
      </div>
    </div>
  );
};
