import { AdminOnlyWrapper } from "@/components/app/AdminOnlyWrapper";
import { CreateUserByAdminForm } from "@/components/app/UserForm/CreateUserByAdminForm";
import { UpdateUserForm } from "@/components/app/UserForm/UpdateUserForm";
import { UsersTable } from "@/components/app/UsersTable/UsersTable";
import { PageWrapper } from "@/components/common/PageWrapper";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { useState } from "react";

export const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState("");

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
    setSelectedEmail("");
  };

  return (
    <PageWrapper
      title="Users"
      icon={User}
      extra={
        <AdminOnlyWrapper>
          <Button onClick={handleOpenForm}>Add user</Button>
        </AdminOnlyWrapper>
      }
    >
      <UsersTable setSelectedEmail={setSelectedEmail} />
      <CreateUserByAdminForm open={isOpen} onClose={handleCloseForm} />
      <AdminOnlyWrapper>
        <UpdateUserForm
          selectedEmail={selectedEmail}
          open={!!selectedEmail}
          onClose={handleCloseForm}
        />
      </AdminOnlyWrapper>
    </PageWrapper>
  );
};
