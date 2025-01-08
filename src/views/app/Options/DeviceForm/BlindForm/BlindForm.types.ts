import { type CommonFormProps } from "@/types/common.types";

export type BlindFormProps = {
  name?: string;
  deviceId?: string;
} & Pick<CommonFormProps, "onClose" | "selectedId">;
