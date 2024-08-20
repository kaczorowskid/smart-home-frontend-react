// const API_URL = "http://localhost:3001";

export const apiUrls = {
  devices: {
    base: `/devices`,
    getDevice: (id: string) => `/devices/${id}`,
    getDevicesToBeDisplayedIds: `/devices/displayed`,
  },
};
