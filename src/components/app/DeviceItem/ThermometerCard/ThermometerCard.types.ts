import { type DropdownProps } from "@/components/common/Dropdown/Dropdown.types";
import {
  type Thermometer,
  type ThermometerData,
} from "@/api/types/common.types";

export type ThermometerCardProps = {
  isLocalKey: boolean;
  min: Thermometer["min"];
  max: Thermometer["max"];
  name: Thermometer["name"];
  date: ThermometerData["date"];
  items: DropdownProps["items"];
  deviceId: Thermometer["deviceId"];
  deviceStatus: Thermometer["status"];
  battery: ThermometerData["battery"];
  humidity: ThermometerData["humidity"];
  temperature: ThermometerData["temperature"];
};
