export const displayedDevicesKeys = {
  dashboardTopDeviceLeftCorner: "dashboardTopDeviceLeftCorner",
  dashboardTopDeviceLeftMiddle: "dashboardTopDeviceLeftMiddle",
  dashboardTopDeviceRightMiddle: "dashboardTopDeviceRightMiddle",
  dashboardTopDeviceRightCorner: "dashboardTopDeviceRightCorner",
  dashboardTemperatureChart: "dashboardTemperatureChart",
  dashboardHumidityChart: "dashboardHumidityChart",
  graphsTemperatureChart: "graphsTemperatureChart",
  graphsHumidityChart: "graphsHumidityChart",
  grapshAllCharts: "grapshAllCharts",
} as const;

export const themeKeys = {
  theme: "theme",
} as const;

export type DisplayedDevicesKey = keyof typeof displayedDevicesKeys;
export type ThemeKey = keyof typeof themeKeys;
