import { AxiosError } from "axios";

export type ChartType = "all" | "temperature" | "humidity";

export type CommonFormProps = {
  selectedId: string;
  open: boolean;
  onClose: () => void;
};

export type CustomAxiosError = AxiosError<{
  message: string;
  statusCode: number;
  prismCode: string;
  timestamp: Date;
}>;
