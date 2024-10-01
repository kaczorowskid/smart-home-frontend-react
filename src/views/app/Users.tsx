import { AdminOnlyWrapper } from "@/components/app/AdminOnlyWrapper";
import { UserForm } from "@/components/app/UserForm";
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
      <AdminOnlyWrapper>
        <UserForm
          selectedEmail={selectedEmail}
          open={isOpen}
          onClose={handleCloseForm}
        />
      </AdminOnlyWrapper>
    </PageWrapper>
  );
};
