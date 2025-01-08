import { useState } from "react";
import { NotebookPen } from "lucide-react";
import { FormattedMessage } from "react-intl";
import { Button } from "@/components/ui/button";
import { permissionsList } from "@/api/types/common.types";
import { RoomsTable } from "@/views/app/Options/RoomsTable";
import { UsersTable } from "@/views/app/Options/UsersTable";
import { PageWrapper } from "@/components/common/PageWrapper";
import { DevicesTable } from "@/views/app/Options/DevicesTable";
import { PermissionsWrapper } from "@/components/app/PermissionsWrapper";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { UserForm } from "./UserForm";
import { RoomsForm } from "./RoomsForm";
import { RolesForm } from "./RolesForm";
import { DeviceForm } from "./DeviceForm";
import { RolesTable } from "./RolesTable";
import { FormProvider } from "./FormProvider";
import { type OptionsTab } from "./Options.types";
import { useFormSelector } from "./Options.hooks";
import { buttonNameMapper } from "./Options.utils";

export const Options = () => {
  const [selectedTab, setSelectedTab] = useState<OptionsTab>("devices");
  const { isOpen, selectedId, handleOpen, handleClose, handleSelectedId } =
    useFormSelector(selectedTab);

  const handleSelectTab = (tab: string) => {
    setSelectedTab(tab as OptionsTab);
  };

  return (
    <PageWrapper
      icon={NotebookPen}
      title={<FormattedMessage id="view.options" />}
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
          <PermissionsWrapper
            permissions={[
              permissionsList.IS_ADMIN,
              permissionsList.OPTIONS_VIEW_DEVICES,
            ]}
          >
            <TabsTrigger value="devices" className="w-full">
              <FormattedMessage id="view.devices" />
            </TabsTrigger>
          </PermissionsWrapper>
          <PermissionsWrapper
            permissions={[
              permissionsList.IS_ADMIN,
              permissionsList.OPTIONS_VIEW_ROOMS,
            ]}
          >
            <TabsTrigger value="rooms" className="w-full">
              <FormattedMessage id="view.rooms" />
            </TabsTrigger>
          </PermissionsWrapper>
          <PermissionsWrapper
            permissions={[
              permissionsList.IS_ADMIN,
              permissionsList.OPTIONS_VIEW_USERS,
            ]}
          >
            <TabsTrigger value="users" className="w-full">
              <FormattedMessage id="view.users" />
            </TabsTrigger>
          </PermissionsWrapper>
          <PermissionsWrapper
            permissions={[
              permissionsList.IS_ADMIN,
              permissionsList.OPTIONS_VIEW_ROLES,
            ]}
          >
            <TabsTrigger value="roles" className="w-full">
              <FormattedMessage id="view.roles" />
            </TabsTrigger>
          </PermissionsWrapper>
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
        usersForm={
          <UserForm
            open={isOpen}
            onClose={handleClose}
            selectedId={selectedId}
          />
        }
        roomsForm={
          <RoomsForm
            open={isOpen}
            onClose={handleClose}
            selectedId={selectedId}
          />
        }
        rolesForm={
          <RolesForm
            open={isOpen}
            onClose={handleClose}
            selectedId={selectedId}
          />
        }
        devicesForm={
          <DeviceForm
            open={isOpen}
            onClose={handleClose}
            selectedId={selectedId}
          />
        }
      />
    </PageWrapper>
  );
};
