import { CommonFormProps } from "@/types/common.types";

export type ThermometerFormProps = {
  deviceId?: string;
  name?: string;
} & Pick<CommonFormProps, "selectedId" | "onClose">;
