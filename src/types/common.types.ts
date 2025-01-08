import { type AxiosError } from "axios";

export type ChartType = "all" | "humidity" | "temperature";

export type CommonFormProps = {
  open: boolean;
  selectedId: string;
  onClose: () => void;
};

export type CustomAxiosError = AxiosError<{
  message: string;
  timestamp: Date;
  prismCode: string;
  statusCode: number;
}>;
