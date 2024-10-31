import { CommonFormProps } from "@/types/common.types";

export type ThermometerFormProps = {
  selectedId: string;
  onClose: CommonFormProps["onClose"];
  deviceId?: string;
  name?: string;
};
