export const apiUrls = {
  room: {
    base: "/room",
    getRoom: (id: string) => `/room/${id}`,
  },
  role: {
    base: "/role",
    permissions: "/role/permission",
    getRole: (id: string) => `/role/${id}`,
  },
  auth: {
    login: "/auth/login",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
    register: "/auth/register",
    authorize: "/auth/authorize",
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
};
