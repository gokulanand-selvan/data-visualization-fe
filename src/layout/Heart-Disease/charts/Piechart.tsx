import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { HealthData } from "../../../types/data";

const generateGraph = (chartDom: HTMLDivElement | null, data: HealthData[]) => {
  if (!chartDom) return;

  // Dispose of previous chart instance (prevents memory leaks)
  let myChart = echarts.getInstanceByDom(chartDom);
  if (myChart) {
    myChart.dispose();
  }
  myChart = echarts.init(chartDom);

  // Count occurrences of "Yes" and "No" for Heart Disease
  const counts = data.reduce((acc, entry) => {
    acc[entry.HeartDiseaseStatus] = (acc[entry.HeartDiseaseStatus] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const option = {
    title: {
      text: "Heart Disease Ratio",
      left: "center",
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "90rem",
    },
    series: [
      {
        name: "Heart Disease",
        type: "pie",
        radius: "50%",
        data: Object.entries(counts).map(([name, value]) => ({
          name,
          value,
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  myChart.setOption(option);
};

export default function Piechart({ data }: { data: HealthData[] }) {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    generateGraph(chartRef.current, data);
  }, [data]);

  return (
    <div
      ref={chartRef}
      style={{
        width: "90%",
        height: "500px",
        marginTop: "2rem",
        padding: "1rem",
      }}
      id="pie-chart"
    ></div>
  );
}
