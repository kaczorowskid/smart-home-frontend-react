export const apiUrls = {
  devices: {
    base: `/devices`,
    getDevice: (id: string) => `/devices/${id}`,
    getDeviceDataForGraph: (deviceId: string) => `/devices/${deviceId}/data`,
  },
  displayedDevice: {
    getDevice: (order: string) => `/displayed-device/${order}`,
  },
};
