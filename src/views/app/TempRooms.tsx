import { AdminOnlyWrapper } from "@/components/app/AdminOnlyWrapper";
import { RoomsForm } from "@/components/app/RoomsForm";
import { TempRoomsTable } from "@/components/app/TempRoomsTable";
import { PageWrapper } from "@/components/common/PageWrapper";
import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import { useState } from "react";

export const TempRooms = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
    setSelectedId("");
  };

  return (
    <PageWrapper
      title="TempRooms"
      icon={House}
      extra={
        <AdminOnlyWrapper>
          <Button onClick={handleOpenForm}>Add room</Button>
        </AdminOnlyWrapper>
      }
    >
      <TempRoomsTable setSelectedId={setSelectedId} />
      <AdminOnlyWrapper>
        <RoomsForm
          selectedId={selectedId}
          open={isOpen}
          onClose={handleCloseForm}
        />
      </AdminOnlyWrapper>
    </PageWrapper>
  );
};
