import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { useLogoutUser } from "./LogoutSection.hooks";

export const LogoutSection = () => {
  const { mutate: logout } = useLogoutUser();

  return (
    <Card className="w-full">
      <CardContent className="flex min-h-32 items-center justify-between p-5">
        <span className="text-2xl">Logout user</span>
        <Button variant="destructive" onClick={() => logout()}>
          Logout
        </Button>
      </CardContent>
    </Card>
  );
};
