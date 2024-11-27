import { SuccessNotificationProps } from "./SuccessNotification.types";

export const SuccessNotification = ({ children }: SuccessNotificationProps) => (
  <span className="text-green-500">{children}</span>
);
