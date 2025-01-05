export const apiUrls = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    authorize: "/auth/authorize",
    refresh: "/auth/refresh",
    logout: "/auth/logout",
  },
  user: {
    base: "/user",
    getUser: (id: string) => `/user/${id}`,
    verifyUser: (id: string) => `/user/verify/${id}`,
    getUserByToken: (token: string) => `/user/token/${token}`,
  },
  devices: {
    base: "/devices",
    blinds: "/devices/blinds",
    thermometers: "/devices/thermometers",
    getDevice: (id: string) => `/devices/${id}`,
    getDeviceDataForGraph: (deviceId: string) => `/devices/data/${deviceId}`,
  },
  room: {
    base: "/room",
    getRoom: (id: string) => `/room/${id}`,
  },
  role: {
    base: "/role",
    getRole: (id: string) => `/role/${id}`,
    permissions: "/role/permission",
  },
};
