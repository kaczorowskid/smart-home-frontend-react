import { User } from "@/api/types/common.types";

export type UserRole = User["role"];

export type DeviceType = "THERMOMETER" | "BLIND";

export type CommonFormProps = {
  open: boolean;
  onClose: () => void;
};
