import * as echarts from "echarts";
import { useEffect, useRef, useState } from "react";
import { HealthData } from "../../../types/data";

export default function ScatterPlot({ data }: { data: HealthData[] }) {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [selectedChart, setSelectedChart] = useState(
    "Cholesterol vs Triglyceride"
  );

  useEffect(() => {
    if (!chartRef.current || data.length === 0) return;

    let myChart = echarts.getInstanceByDom(chartRef.current);
    if (myChart) {
      myChart.dispose();
    }
    myChart = echarts.init(chartRef.current);

    let xLabel = "";
    let yLabel = "";
    let chartData: number[][] = [];

    switch (selectedChart) {
      case "Cholesterol vs Triglyceride":
        xLabel = "Cholesterol Level";
        yLabel = "Triglyceride Level";
        chartData = data.map((entry) => [
          Number(entry.CholesterolLevel) || 0,
          Number(entry.TriglycerideLevel) || 0,
        ]);
        break;

      case "Age vs Blood Pressure":
        xLabel = "Age";
        yLabel = "Blood Pressure";
        chartData = data.map((entry) => [
          Number(entry.Age) || 0,
          Number(entry.BloodPressure) || 0,
        ]);
        break;

      case "BMI vs Heart Disease":
        xLabel = "BMI";
        yLabel = "Heart Disease (1 = Yes, 0 = No)";
        chartData = data.map((entry) => [
          Number(entry.BMI) || 0,
          entry.HeartDiseaseStatus === "Yes" ? 1 : 0,
        ]);
        break;

      default:
        break;
    }

    const option = {
      title: {
        text: selectedChart,
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      xAxis: {
        name: xLabel,
        type: "value",
        splitLine: { show: false },
      },
      yAxis: {
        name: yLabel,
        type: "value",
        splitLine: { show: false },
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      series: [
        {
          name: selectedChart,
          type: "scatter",
          symbolSize: 10,
          data: chartData,
          emphasis: {
            itemStyle: {
              color: "red",
            },
          },
        },
      ],
    };

    myChart.setOption(option);
  }, [data, selectedChart]);

  return (
    <div className="px-10" >
      <select
        onChange={(e) => setSelectedChart(e.target.value)}
        value={selectedChart}
        style={{
          padding: "0.5rem",
          marginBottom: "1rem",
          fontSize: "1rem",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      >
        <option value="Cholesterol vs Triglyceride">
          Cholesterol vs Triglyceride
        </option>
        <option value="Age vs Blood Pressure">Age vs Blood Pressure</option>
        <option value="BMI vs Heart Disease">BMI vs Heart Disease</option>
      </select>
      <div
        ref={chartRef}
        style={{
          width: "95vw",
          height: "55vh",
          marginTop: "1rem",
          padding: "1rem",
        }}
      ></div>
    </div>
  );
}
