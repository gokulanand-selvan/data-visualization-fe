import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { StateData } from "../../../types/data";

export default function PieChart({ data }: { data: StateData[] }) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartInstance = echarts.init(chartRef.current);

    // Aggregate population data by Zone
    const zonePopulationMap: Record<string, number> = {};

    data.forEach((state) => {
      if (!zonePopulationMap[state.Zone]) {
        zonePopulationMap[state.Zone] = 0;
      }
      zonePopulationMap[state.Zone] += state.Population;
    });

    // Convert to ECharts format
    const pieChartData = Object.entries(zonePopulationMap).map(
      ([zone, population]) => ({
        name: zone,
        value: population,
      })
    );

    const option: echarts.EChartsOption = {
      title: {
        text: "Population Distribution by Zone",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      series: [
        {
          name: "Population",
          type: "pie",
          radius: "60%",
          data: pieChartData,
          label: {
            formatter: "{b}: {d}%",
          },
        },
      ],
    };

    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    };
  }, [data]);

  return (
    <div
      ref={chartRef}
      style={{ width: "90%", height: "500px", padding: "2rem" }}
    />
  );
}
