import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { StateData } from "../../../types/data";

interface BarChartProps {
  data: StateData[];
}

export default function BarChart({ data }: BarChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartInstance = echarts.init(chartRef.current);

    // Extract State Names and Population
    const stateNames = data.map((state) => state.Name);
    const populations = data
      .map((state) => state.Population)
      .sort((a, b) => a - b);

    const option: echarts.EChartsOption = {
      title: {
        text: "Population by State",
        left: "center",
      },
      tooltip: {
        trigger: "axis",
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        data: stateNames,
        axisLabel: {
          rotate: 45,
        },
      },
      yAxis: {
        type: "value",
        name: "Population",
      },
      series: [
        {
          name: "Population",
          type: "bar",
          data: populations,
          itemStyle: {
            color: "#3498db", // Set bar color
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
      style={{ width: "100%", height: "500px", padding: "3rem" }}
    />
  );
}
