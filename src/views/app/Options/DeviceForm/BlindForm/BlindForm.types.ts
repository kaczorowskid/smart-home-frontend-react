import { CommonFormProps } from "@/types/common.types";

export type BlindFormProps = {
  deviceId?: string;
  name?: string;
} & Pick<CommonFormProps, "selectedId" | "onClose">;
