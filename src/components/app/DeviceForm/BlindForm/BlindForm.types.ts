import { CommonFormProps } from "@/types/common.types";

export type BlindFormProps = {
  selectedId: string;
  onClose: CommonFormProps["onClose"];
  deviceId?: string;
  name?: string;
};
