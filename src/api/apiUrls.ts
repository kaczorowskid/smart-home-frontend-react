export const apiUrls = {
  devices: {
    base: "/devices",
    thermometers: "/devices/thermometers",
    getDevice: (id: string) => `/devices/${id}`,
    getDeviceDataForGraph: (deviceId: string) => `/devices/${deviceId}/data`,
  },
};
