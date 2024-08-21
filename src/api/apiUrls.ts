export const apiUrls = {
  devices: {
    base: `/devices`,
    getDevice: (id: string) => `/devices/${id}`,
    getDevicesToBeDisplayedIds: `/devices/displayed`,
    getDeviceTemperatureForGraph: (deviceId: string) =>
      `/devices/${deviceId}/temperature`,
    getDeviceHumidityForGraph: (deviceId: string) =>
      `/devices/${deviceId}/humidity`,
  },
};
