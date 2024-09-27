export const apiUrls = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    authorize: "/auth/authorize",
    logout: "/auth/logout",
  },
  user: {
    base: "/user",
  },
  devices: {
    base: "/devices",
    thermometers: "/devices/thermometers",
    getDevice: (id: string) => `/devices/${id}`,
    getDeviceDataForGraph: (deviceId: string) => `/devices/${deviceId}/data`,
  },
};
