import { type CommonFormProps } from "@/types/common.types";

export type ThermometerFormProps = {
  name?: string;
  deviceId?: string;
} & Pick<CommonFormProps, "onClose" | "selectedId">;
