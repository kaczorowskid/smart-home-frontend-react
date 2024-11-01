import { DevicesTable } from "@/views/app/Options/DevicesTable";
import { RoomsTable } from "@/views/app/Options/RoomsTable";
import { UsersTable } from "@/views/app/Options/UsersTable/UsersTable";
import { PageWrapper } from "@/components/common/PageWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NotebookPen, Settings as SettingsIcon } from "lucide-react";
import { useState } from "react";
import { FormProvider } from "./FormProvider";
import { AdminOnlyWrapper } from "@/components/app/AdminOnlyWrapper";
import { UserForm } from "./UserForm";
import { RoomsForm } from "./RoomsForm";
import { DeviceForm } from "./DeviceForm";
import { Button } from "@/components/ui/button";
import { useFormSelector } from "./Options.hooks";
import { OptionsTab } from "./Options.types";
import { buttonNameMapper } from "./Options.utils";

export const Options = () => {
  const [selectedTab, setSelectedTab] = useState<OptionsTab>("devices");
  const { isOpen, selectedId, handleSelectedId, handleClose, handleOpen } =
    useFormSelector(selectedTab);

  const handleSelectTab = (tab: string) => {
    setSelectedTab(tab as OptionsTab);
  };

  return (
    <PageWrapper
      title="Options"
      icon={NotebookPen}
      extra={
        <AdminOnlyWrapper>
          <Button
            onClick={handleOpen}
          >{`Add ${buttonNameMapper[selectedTab]}`}</Button>
        </AdminOnlyWrapper>
      }
    >
      <Tabs
        className="w-full border"
        defaultValue={selectedTab}
        onValueChange={handleSelectTab}
      >
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="devices">
            Devices
          </TabsTrigger>
          <TabsTrigger className="w-full" value="rooms">
            Rooms
          </TabsTrigger>
          <TabsTrigger className="w-full" value="users">
            Users
          </TabsTrigger>
        </TabsList>
        <TabsContent value="devices">
          <DevicesTable setSelectedId={handleSelectedId} />
        </TabsContent>
        <TabsContent value="rooms">
          <RoomsTable setSelectedId={handleSelectedId} />
        </TabsContent>
        <TabsContent value="users">
          <UsersTable setSelectedEmail={handleSelectedId} />
        </TabsContent>
      </Tabs>

      <FormProvider
        selectedTab={selectedTab}
        devicesForm={
          <AdminOnlyWrapper>
            <DeviceForm
              selectedId={selectedId}
              open={isOpen}
              onClose={handleClose}
            />
          </AdminOnlyWrapper>
        }
        usersForm={
          <AdminOnlyWrapper>
            <UserForm
              selectedId={selectedId}
              open={isOpen}
              onClose={handleClose}
            />
          </AdminOnlyWrapper>
        }
        roomsForm={
          <AdminOnlyWrapper>
            <RoomsForm
              selectedId={selectedId}
              open={isOpen}
              onClose={handleClose}
            />
          </AdminOnlyWrapper>
        }
      />
    </PageWrapper>
  );
};
