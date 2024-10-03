import { AdminOnlyWrapper } from "@/components/app/AdminOnlyWrapper";
import { DeviceForm } from "@/components/app/DeviceForm";
import { DevicesTable } from "@/components/app/DevicesTable/DevicesTable";
import { Button } from "@/components/common/Button";
import { PageWrapper } from "@/components/common/PageWrapper";
import { RadioTower } from "lucide-react";
import { useState } from "react";

export const Devices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const handleOpenForm = () => {
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setSelectedId("");
    setIsOpen(false);
  };

  return (
    <PageWrapper
      title="Devices"
      icon={RadioTower}
      extra={
        <AdminOnlyWrapper>
          <Button onClick={handleOpenForm}>Add device</Button>
        </AdminOnlyWrapper>
      }
    >
      <DevicesTable setSelectedId={setSelectedId} />
      <DeviceForm
        selectedId={selectedId}
        open={isOpen}
        onClose={handleCloseForm}
      />
    </PageWrapper>
  );
};
