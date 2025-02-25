import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { StateData } from "../../../types/data";

interface HeatmapProps {
  data: StateData[];
}

export default function Heatmap({ data }: HeatmapProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartInstance = echarts.init(chartRef.current);

    // Calculate Population Density (Population / Area)
    const heatmapData = data.map((state) => ({
      name: state.Name,
      value: (state.Population / state.Area_sq_km).toFixed(2), // Density
    }));

    const option: echarts.EChartsOption = {
      title: {
        text: "Population Density by State",
        left: "center",
      },
      height: "65%",
      tooltip: {
        trigger: "item",
      },
      toolbox: { feature: { saveAsImage: {} } },
      xAxis: {
        type: "category",
        data: heatmapData.map((state) => state.name),
        axisLabel: { rotate: 45, interval: 0 },
      },

      yAxis: {
        type: "category",
        data: ["Density"],
      },
      visualMap: {
        min: Math.min(...heatmapData.map((d) => +d.value)),
        max: Math.max(...heatmapData.map((d) => +d.value)),
        calculable: true,
        orient: "horizontal",
        left: "center",
        bottom: 10,
      },
      series: [
        {
          name: "Population Density",
          type: "heatmap",
          data: heatmapData.map((state, index) => [index, 0, +state.value]),
          label: {
            show: true,
            formatter: "{@[2]}",
            fontSize: 7,
          },

          emphasis: {
            itemStyle: {
              borderColor: "#333",
              borderWidth: 1,
            },
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
      style={{ width: "100%", height: "600px", padding: "2rem" }}
    />
  );
}
