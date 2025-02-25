import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { StateData } from "../../../types/data";

interface ScatterPlotProps {
  data: StateData[];
}

export default function ScatterPlot({ data }: ScatterPlotProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartInstance = echarts.init(chartRef.current);

    const scatterData = data.map((state) => [
      state.Area_sq_km,
      state.Population,
      state.Name,
    ]);

    const option: echarts.EChartsOption = {
      title: {
        text: "Population vs. Area by State",
        left: "center",
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      tooltip: {
        trigger: "item",
        formatter: (params: any) => {
          return `${params.data[2]}<br/>Area: ${params.data[0]} km²<br/>Population: ${params.data[1]}`;
        },
      },
      xAxis: {
        type: "log",
        name: "Area (sq km)",
        nameLocation: "middle",
        nameGap: 25,
      },
      yAxis: {
        type: "log",
        name: "Population",
        nameLocation: "middle",
        nameGap: 50,
      },
      series: [
        {
          name: "States",
          type: "scatter",
          data: scatterData,
          symbolSize: 10,
          itemStyle: {
            color: "#e74c3c",
          },
        },
      ],
    };

    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: "90%", height: "500px" }} />;
}
