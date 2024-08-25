export const localShorageKeys = {
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

export type LocalStorageKey = keyof typeof localShorageKeys;
