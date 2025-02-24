import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { HealthData } from "../../../types/data";

export default function Heatmap({ data }: { data: HealthData[] }) {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartRef.current || data.length === 0) return;

    let myChart = echarts.getInstanceByDom(chartRef.current);
    if (myChart) {
      myChart.dispose();
    }
    myChart = echarts.init(chartRef.current);

    // Extract relevant numerical data for heatmap
    const categories = ["Cholesterol", "Blood Pressure", "Triglycerides"];
    const values = data.map((entry, index) => [
      Math.floor(Math.random() * categories.length), // Random category index (x-axis)
      index, // y-axis index
      Number(entry.CholesterolLevel) || 130, // Value (e.g., Cholesterol)
    ]);

    const option = {
      title: {
        text: "Health Data Heatmap Of People Who Have Heart Disease",
        subtext: "Cholesterol, Blood Pressure, and Triglycerides",
        left: "center",
      },
      tooltip: {
        position: "top",
      },
      grid: {
        height: "60%",
        top: "10%",
      },
      xAxis: {
        type: "category",
        data: categories,
        splitArea: { show: true },
      },
      yAxis: {
        type: "category",
        data: data.map((_, index) => `Patient ${index + 1}`),
        splitArea: { show: true },
      },
      visualMap: {
        min: 0,
        max: 300,
        calculable: true,
        orient: "horizontal",
        left: "center",
        bottom: "5%",
      },
      series: [
        {
          name: "Health Metric",
          type: "heatmap",
          data: values,
          label: {
            show: true,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };


    myChart.setOption(option);
  }, [data]);

  return (
    <div
      ref={chartRef}
      style={{ width: "95vw", height: "75vh", marginTop: "2rem", padding: "1rem" }}
    ></div>
  );
}
