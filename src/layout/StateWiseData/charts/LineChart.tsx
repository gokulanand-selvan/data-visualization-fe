import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { StateData } from "../../../types/data";

interface LineChartProps {
  data: StateData[];
}

export default function StatehoodLineChart({ data }: LineChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chartInstance = echarts.init(chartRef.current);

    // Process Data: Extract Statehood Year and Count Occurrences
    const statehoodYears: Record<number, number> = {};

    data.forEach((state) => {
      const year = new Date(state.Statehood).getFullYear();
      statehoodYears[year] = (statehoodYears[year] || 0) + 1;
    });

    // Sort Years in Ascending Order
    const sortedYears = Object.keys(statehoodYears)
      .map(Number)
      .sort((a, b) => a - b);

    // Extract Data for ECharts
    const yearLabels = sortedYears.map((year) => year.toString());
    const stateCounts = sortedYears.map((year) => statehoodYears[year]);

    const option: echarts.EChartsOption = {
      title: {
        text: "Statehood Year Trend",
        left: "center",
      },
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        data: yearLabels,
        axisLabel: {
          rotate: 45,
        },
      },
      yAxis: {
        type: "value",
        name: "Number of States Formed",
      },
      series: [
        {
          name: "States Formed",
          type: "line",
          data: stateCounts,
          smooth: true,
          symbol: "circle",
          symbolSize: 8,
          lineStyle: {
            width: 3,
          },
          itemStyle: {
            color: "#5470C6",
          },
        },
      ],
    };

    chartInstance.setOption(option);

    return () => {
      chartInstance.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: "500px" }} />;
}
