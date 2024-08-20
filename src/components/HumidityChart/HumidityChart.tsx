import {
  Label,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CardWithHeader } from "../common/CardWithHeader/CardWithHeader";

const chartData = [{ month: "january", desktop: 60 }];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const HumidityChart = () => {
  const totalVisitors = 100;

  return (
    <>
      <CardWithHeader
        title="Humidity"
        description="Outdoor humidity"
        cardClassName="flex-grow"
        contentClassName="h-80"
      >
        <ResponsiveContainer width="100%" height="100%">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square w-full max-w-[250px]"
          >
            <RadialBarChart
              data={chartData}
              endAngle={180}
              innerRadius={150}
              outerRadius={200}
              cx="50%"
              cy="70%"
            >
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) - 16}
                            className="fill-foreground text-2xl font-bold"
                          >
                            {totalVisitors.toLocaleString()}
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
              <RadialBar
                dataKey="desktop"
                stackId="a"
                cornerRadius={5}
                fill="var(--color-desktop)"
                className="stroke-transparent stroke-4"
              />
            </RadialBarChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardWithHeader>
    </>
  );
};
