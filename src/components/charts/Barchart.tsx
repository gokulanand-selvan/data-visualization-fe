import * as echarts from "echarts";
import { HealthData } from "../../types/data";

function generateBarchart(data: HealthData[], title: string) {
  let chartDom = document.getElementById("bar-chart")!;
  let myChart = echarts.init(chartDom);

  let option = {
    title: {
      text: title,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: [
        "Blood Pressure",
        "Triglyceride Level",
        "Sleep Hours",
        "Homocysteine Level",
        "Cholesterol Level",
        "CRP Level",
      ],
    },
    series: [
      {
        name: "Male",
        type: "bar",
        data: data
          .filter((maleData) => maleData.Gender === "Male")
          .map((data) => {
            const returnData = [
              data.BloodPressure,
              data.TriglycerideLevel,
              data.SleepHours,
              data.HomocysteineLevel,
              data.CholesterolLevel,
              data.CrpLevel,
            ];

            return returnData;
          }),
      },
      {
        name: "Male",
        type: "bar",
        data: data
          .filter((maleData) => maleData.Gender === "Male")
          .map((data) => {
            const returnData = [
              data.BloodPressure,
              data.TriglycerideLevel,
              data.SleepHours,
              data.HomocysteineLevel,
              data.CholesterolLevel,
              data.CrpLevel,
            ];
            return returnData;
          }),
      },
    ],
  };

  option && myChart.setOption(option);
}

export default function BarchartComp({
  data,
  title,
}: {
  data: HealthData[];
  title: string;
}) {
  console.log(data);
  setTimeout(() => {
    generateBarchart(data, title);
  }, 1000);
  return (
    <div
      style={{
        width: "95vw",
        height: "55vh",
        top: "1.5rem",
      }}
      id="bar-chart"
    ></div>
  );
}
