import { DevicesTable } from "@/views/app/Settings/DevicesTable";
import { RoomsTable } from "@/views/app/Settings/RoomsTable";
import { UsersTable } from "@/views/app/Settings/UsersTable/UsersTable";
import { PageWrapper } from "@/components/common/PageWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings as SettingsIcon } from "lucide-react";
import { useState } from "react";
import { Views } from "./Settings.types";
import { FormProvider } from "./FormProvider";
import { AdminOnlyWrapper } from "@/components/app/AdminOnlyWrapper";
import { UserForm } from "./UserForm";
import { RoomsForm } from "./RoomsForm";
import { DeviceForm } from "./DeviceForm";
import { Button } from "@/components/ui/button";
import { useFormSelector } from "./Settings.hooks";
import { buttonNameMapper } from "./Settings.utils";

export const Settings = () => {
  const [selectedTab, setSelectedTab] = useState<Views>("devices");
  const { isOpen, selectedId, handleSelectedId, handleClose, handleOpen } =
    useFormSelector(selectedTab);

  const handleSelectTab = (tab: string) => {
    setSelectedTab(tab as Views);
  };

  return (
    <PageWrapper
      title="Settings"
      icon={SettingsIcon}
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
          <TabsTrigger className="w-full" value="users">
            Users
          </TabsTrigger>
          <TabsTrigger className="w-full" value="rooms">
            Rooms
          </TabsTrigger>
        </TabsList>
        <TabsContent value="devices">
          <DevicesTable setSelectedId={handleSelectedId} />
        </TabsContent>
        <TabsContent value="users">
          <UsersTable setSelectedEmail={handleSelectedId} />
        </TabsContent>
        <TabsContent value="rooms">
          <RoomsTable setSelectedId={handleSelectedId} />
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
              //TODO: change email to id
              selectedEmail={selectedId}
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
