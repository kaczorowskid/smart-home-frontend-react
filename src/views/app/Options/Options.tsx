import { DevicesTable } from "@/views/app/Options/DevicesTable";
import { RoomsTable } from "@/views/app/Options/RoomsTable";
import { UsersTable } from "@/views/app/Options/UsersTable";
import { PageWrapper } from "@/components/common/PageWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NotebookPen } from "lucide-react";
import { useState } from "react";
import { FormProvider } from "./FormProvider";
import { UserForm } from "./UserForm";
import { RoomsForm } from "./RoomsForm";
import { DeviceForm } from "./DeviceForm";
import { Button } from "@/components/ui/button";
import { useFormSelector } from "./Options.hooks";
import { OptionsTab } from "./Options.types";
import { buttonNameMapper } from "./Options.utils";
import { FormattedMessage } from "react-intl";
import { RolesTable } from "./RolesTable";
import { RolesForm } from "./RolesForm/RolesForm";

export const Options = () => {
  const [selectedTab, setSelectedTab] = useState<OptionsTab>("devices");
  const { isOpen, selectedId, handleSelectedId, handleClose, handleOpen } =
    useFormSelector(selectedTab);

  const handleSelectTab = (tab: string) => {
    setSelectedTab(tab as OptionsTab);
  };

  return (
    <PageWrapper
      title={<FormattedMessage id="view.options" />}
      icon={NotebookPen}
      extra={
        <Button onClick={handleOpen}>{buttonNameMapper[selectedTab]}</Button>
      }
    >
      <Tabs
        className="w-full"
        defaultValue={selectedTab}
        onValueChange={handleSelectTab}
      >
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="devices">
            <FormattedMessage id="view.devices" />
          </TabsTrigger>
          <TabsTrigger className="w-full" value="rooms">
            <FormattedMessage id="view.rooms" />
          </TabsTrigger>
          <TabsTrigger className="w-full" value="users">
            <FormattedMessage id="view.users" />
          </TabsTrigger>
          <TabsTrigger className="w-full" value="roles">
            <FormattedMessage id="view.roles" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="devices">
          <DevicesTable setSelectedId={handleSelectedId} />
        </TabsContent>
        <TabsContent value="rooms">
          <RoomsTable setSelectedId={handleSelectedId} />
        </TabsContent>
        <TabsContent value="users">
          <UsersTable setSelectedId={handleSelectedId} />
        </TabsContent>
        <TabsContent value="roles">
          <RolesTable setSelectedId={handleSelectedId} />
        </TabsContent>
      </Tabs>

      <FormProvider
        selectedTab={selectedTab}
        devicesForm={
          <DeviceForm
            selectedId={selectedId}
            open={isOpen}
            onClose={handleClose}
          />
        }
        usersForm={
          <UserForm
            selectedId={selectedId}
            open={isOpen}
            onClose={handleClose}
          />
        }
        roomsForm={
          <RoomsForm
            selectedId={selectedId}
            open={isOpen}
            onClose={handleClose}
          />
        }
        rolesForm={
          <RolesForm
            selectedId={selectedId}
            open={isOpen}
            onClose={handleClose}
          />
        }
      />
    </PageWrapper>
  );
};
