import { type ErrorNotificationProps } from "./ErrorNotification.types";

export const ErrorNotification = ({ children }: ErrorNotificationProps) => (
  <div className="text-red-500">{children}</div>
);
