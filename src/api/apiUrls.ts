export const apiUrls = {
  devices: {
    base: `/devices`,
    getDevice: (id: string) => `/devices/${id}`,
    getDeviceTemperatureForGraph: (deviceId: string) =>
      `/devices/${deviceId}/temperature`,
    getDeviceHumidityForGraph: (deviceId: string) =>
      `/devices/${deviceId}/humidity`,
  },
  displayedDevice: {
    getDevice: (order: string) => `/displayed-device/${order}`,
  },
};
