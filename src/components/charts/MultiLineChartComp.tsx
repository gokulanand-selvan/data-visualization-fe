import * as echarts from "echarts";
import { HealthData } from "../../types/data";
import { useEffect } from "react";

function generateGraph(data: HealthData[], title: string) {
  let chartDom = document.getElementById("multi-line-chart");
  let myChart = echarts.init(chartDom);
  console.log(title);
  // Filter data to only include people who have heart disease
  const filteredData = data.filter(
    (entry) => entry.HeartDiseaseStatus === "Yes"
  );

  // Extract unique age groups from the filtered data
  const ageGroups = [...new Set(filteredData.map((entry) => entry.Age))].sort(
    (a, b) => a - b
  );

  // Create series for each metric (BloodPressure, CholesterolLevel, etc.)
  const bloodPressureData = ageGroups.map((age) => {
    const entry = filteredData.find((d) => d.Age === age);
    return entry ? entry.BloodPressure : 0;
  });

  const cholesterolData = ageGroups.map((age) => {
    const entry = filteredData.find((d) => d.Age === age);
    return entry ? entry.CholesterolLevel : 0;
  });

  const bmiData = ageGroups.map((age) => {
    const entry = filteredData.find((d) => d.Age === age);
    return entry ? entry.BMI : 0;
  });

  const SleepHourData = ageGroups.map((age) => {
    const entry = filteredData.find((d) => d.Age === age);
    return entry ? entry.SleepHours : 0;
  });

  const CRPLevel = ageGroups.map((age) => {
    const entry = filteredData.find((d) => d.Age === age);
    return entry ? entry.CRPLevel : 0;
  });

  const HomocysteineLevel = ageGroups.map((age) => {
    const entry = filteredData.find((d) => d.Age === age);
    return entry ? entry.HomocysteineLevel : 0;
  });

  const TriglycerideLevel = ageGroups.map((age) => {
    const entry = filteredData.find((d) => d.Age === age);
    return entry ? entry.TriglycerideLevel : 0;
  });

  // ECharts configuration
  const option = {
    title: {
      text: "Age vs Health condition",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: [
        "Blood Pressure",
        "Cholesterol Level",
        "BMI",
        "Hours of Sleep",
        "CRP Level",
        "Homocysteine Level",
        "Triglyceride Level",
      ],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ageGroups, // Use Age for the X-axis
      name: "Age", // Label for the X-axis
      nameLocation: "middle", // Position of the name on the axis
      nameGap: 30, // Gap between the axis and the name
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Blood Pressure",
        type: "line",
        stack: "Total",
        data: bloodPressureData,
      },
      {
        name: "Cholesterol Level",
        type: "line",
        stack: "Total",
        data: cholesterolData,
      },
      {
        name: "BMI",
        type: "line",
        stack: "Total",
        data: bmiData,
      },
      {
        name: "Hours of Sleep",
        type: "line",
        stack: "Total",
        data: SleepHourData,
      },
      {
        name: "CRP Level",
        type: "line",
        stack: "Total",
        data: CRPLevel,
      },
      {
        name: "Homocysteine Level",
        type: "line",
        stack: "Total",
        data: HomocysteineLevel,
      },
      {
        name: "Triglyceride Level",
        type: "line",
        stack: "Total",
        data: TriglycerideLevel,
      },
    ],
  };

  myChart.setOption(option);
}

export default function MultiLineChartComp({
  data,
  title,
}: {
  data: HealthData[];
  title: string;
}) {
  // Ensure chart is generated after data is available
  useEffect(() => {
    generateGraph(data, title);
  }, [data, title]);

  return (
    <div
      id="multi-line-chart"
      style={{
        width: "95vw",
        height: "55vh",
        marginTop: "2rem",
        padding: "1rem",
      }}
    ></div>
  );
}
