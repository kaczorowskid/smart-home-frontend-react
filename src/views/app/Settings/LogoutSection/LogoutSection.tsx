import { useLogoutUser } from "@/api/hooks/auth.hooks";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const LogoutSection = () => {
  const { mutate: logout } = useLogoutUser();

  return (
    <Card className="w-full mb-5">
      <CardContent className="flex min-h-32 items-center justify-between p-5">
        <span className="text-2xl">Logout user</span>
        <Button variant="destructive" onClick={() => logout()}>
          Logout
        </Button>
      </CardContent>
    </Card>
  );
};
