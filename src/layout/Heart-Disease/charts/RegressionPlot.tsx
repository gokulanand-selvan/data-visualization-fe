import * as echarts from "echarts";
import { useEffect, useRef, useState } from "react";
import { HealthData } from "../../../types/data";

// Sigmoid function to simulate logistic regression probability
const sigmoid = (x: number) => 1 / (1 + Math.exp(-x));

export default function RegressionPlot({ data }: { data: HealthData[] }) {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const [selectedFactor, setSelectedFactor] = useState("Age");

  useEffect(() => {
    if (!chartRef.current || data.length === 0) return;

    let myChart = echarts.getInstanceByDom(chartRef.current);
    if (myChart) {
      myChart.dispose();
    }
    myChart = echarts.init(chartRef.current);

    let xLabel = selectedFactor;
    let xData: number[] = [];
    let yData: number[] = [];

    // Extract relevant data based on selected factor
    data.forEach((entry) => {
      let xValue = 0;
      switch (selectedFactor) {
        case "Age":
          xValue = Number(entry.Age) || 0;
          break;
        case "BMI":
          xValue = Number(entry.BMI) || 0;
          break;
        case "Cholesterol Level":
          xValue = Number(entry.CholesterolLevel) || 0;
          break;
        default:
          break;
      }

      if (xValue > 0) {
        xData.push(xValue);
        yData.push(sigmoid(xValue / 10)); // Simulating logistic regression output
      }
    });

    const option = {

      title: {
        text: `Probability of Heart Disease vs. ${xLabel}`,
        left: "center",
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        name: xLabel,
        type: "value",
        splitLine: { show: false },
      },
      yAxis: {
        name: "Probability of Heart Disease",
        type: "value",
        min: 0,
        max: 1,
        splitLine: { show: false },
      },
      series: [
        {
          name: "Probability",
          type: "line",
          smooth: true,
          data: xData.map((x, i) => [x, yData[i]]),
          lineStyle: {
            color: "red",
          },
          emphasis: {
            itemStyle: {
              color: "blue",
            },
          },
        },
      ],
    };

    myChart.setOption(option);
  }, [data, selectedFactor]);

  return (
    <div className="px-10">
      <select
        onChange={(e) => setSelectedFactor(e.target.value)}
        value={selectedFactor}
        style={{
          padding: "0.5rem",
          marginBottom: "1rem",
          fontSize: "1rem",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      >
        <option value="Age">Age</option>
        <option value="BMI">BMI</option>
        <option value="Cholesterol Level">Cholesterol Level</option>
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
