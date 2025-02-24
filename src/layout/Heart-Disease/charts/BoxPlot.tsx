import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { HealthData } from "../../../types/data";

const prepareBoxPlotData = (data: HealthData[], key: keyof HealthData) => {
  // Extract numerical values
  const values = data
    .map((entry) => Number(entry[key]))
    .filter((v) => !isNaN(v));

  if (values.length === 0) return [[]];

  // Sort values
  values.sort((a, b) => a - b);

  // Calculate Quartiles
  const q1 = values[Math.floor(values.length * 0.25)];
  const median = values[Math.floor(values.length * 0.5)];
  const q3 = values[Math.floor(values.length * 0.75)];

  // Calculate min & max (excluding outliers)
  const iqr = q3 - q1;
  const lowerFence = q1 - 1.5 * iqr;
  const upperFence = q3 + 1.5 * iqr;

  const min = Math.max(Math.min(...values), lowerFence);
  const max = Math.min(Math.max(...values), upperFence);

  return [[min, q1, median, q3, max]];
};

const generateGraph = (chartDom: HTMLDivElement | null, data: HealthData[]) => {
  if (!chartDom) return;

  let myChart = echarts.getInstanceByDom(chartDom);
  if (myChart) {
    myChart.dispose();
  }
  myChart = echarts.init(chartDom);

  const cholesterolData = prepareBoxPlotData(data, "CholesterolLevel");

  const option = {
    title: {
      text: "Cholesterol Level Distribution",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    xAxis: {
      type: "category",
      data: ["Cholesterol"],
      boundaryGap: true,
      nameGap: 30,
      splitArea: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      name: "Cholesterol Level",
    },
    series: [
      {
        name: "Cholesterol Level",
        type: "boxplot",
        data: cholesterolData,
        tooltip: {
          formatter: function (param: any) {
            return `
              Min: ${param.data[1]}<br>
              Q1: ${param.data[2]}<br>
              Median: ${param.data[3]}<br>
              Q3: ${param.data[4]}<br>
              Max: ${param.data[5]}
            `;
          },
        },
      },
    ],
  };

  myChart.setOption(option);
};

export default function BoxPlot({ data }: { data: HealthData[] }) {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    generateGraph(chartRef.current, data);
  }, [data]);

  return (
    <div
      ref={chartRef}
      style={{
        width: "95vw",
        height: "55vh",
        marginTop: "2rem",
        padding: "1rem",
      }}
      id="box-plot"
    ></div>
  );
}
