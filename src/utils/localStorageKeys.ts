export const displayedDevicesKeys = {
  grapshAllCharts: "grapshAllCharts",
  graphsHumidityChart: "graphsHumidityChart",
  dashboardHumidityChart: "dashboardHumidityChart",
  graphsTemperatureChart: "graphsTemperatureChart",
  dashboardTemperatureChart: "dashboardTemperatureChart",
  dashboardTopDeviceLeftCorner: "dashboardTopDeviceLeftCorner",
  dashboardTopDeviceLeftMiddle: "dashboardTopDeviceLeftMiddle",
  dashboardTopDeviceRightMiddle: "dashboardTopDeviceRightMiddle",
  dashboardTopDeviceRightCorner: "dashboardTopDeviceRightCorner",
} as const;

export const themeKeys = {
  theme: "theme",
} as const;

export type ThemeKey = keyof typeof themeKeys;
export type DisplayedDevicesKey = keyof typeof displayedDevicesKeys;
