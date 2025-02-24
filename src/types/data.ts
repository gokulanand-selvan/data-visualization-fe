export type HealthData = {

    Age: number;
    AlcoholConsumption: "Low" | "Medium" | "High";
    BMI: number;
    BloodPressure: number;
    CRPLevel: number;
    CholesterolLevel: number;
    Diabetes: "Yes" | "No";
    ExerciseHabits: "Low" | "Medium" | "High";
    FamilyHeartDisease: "Yes" | "No";
    FastingBloodSugar: string;
    Gender: "Male" | "Female";
    HeartDiseaseStatus: "Yes" | "No";
    HighBloodPressure: "Yes" | "No";
    HighLDLCholesterol: "Yes" | "No";
    HomocysteineLevel: number;
    LowHDLCholesterol: "Yes" | "No";
    SleepHours: number;
    Smoking: "Yes" | "No";
    StressLevel: "Low" | "Medium" | "High";
    SugarConsumption: "Low" | "Medium" | "High";
    TriglycerideLevel: number;
};


// import * as echarts from "echarts";
// import { HealthData } from "../../types/data";

// function generateBarchart(data: HealthData[], title: string) {
//   let chartDom = document.getElementById("bar-chart")!;
//   let myChart = echarts.init(chartDom);

//   const categories = [
//     "Blood Pressure",
//     "Triglyceride Level",
//     "Sleep Hours",
//     "Homocysteine Level",
//     "Cholesterol Level",
//     "CRP Level",
//   ];

//   function aggregateData(gender: "Male" | "Female") {
//     const filteredData = data.filter((entry) => entry.Gender === gender);
//     console.log(`${gender} filtered  Data:`, filteredData);

//     return [
//       filteredData.reduce((sum, d) => sum + d.BloodPressure, 0) /
//         (filteredData.length || 1),
//       filteredData.reduce((sum, d) => sum + d.TriglycerideLevel, 0) /
//         (filteredData.length || 1),
//       filteredData.reduce((sum, d) => sum + d.SleepHours, 0) /
//         (filteredData.length || 1),
//       filteredData.reduce((sum, d) => sum + d.HomocysteineLevel, 0) /
//         (filteredData.length || 1),
//       filteredData.reduce((sum, d) => sum + d.CholesterolLevel, 0) /
//         (filteredData.length || 1),
//       filteredData.reduce((sum, d) => sum + d.CrpLevel, 0) /
//         (filteredData.length || 1),
//     ];
//   }
//   console.log("Male aggregateData Data:", aggregateData("Male"));
//   console.log("Female aggregateData Data:", aggregateData("Female"));

//   let option = {
//     title: {
//       text: title,
//     },
//     tooltip: {
//       trigger: "axis",
//       axisPointer: {
//         type: "shadow",
//       },
//     },
//     legend: {},
//     grid: {
//       left: "3%",
//       right: "4%",
//       bottom: "3%",
//       containLabel: true,
//     },
//     xAxis: {
//       type: "value",
//       boundaryGap: [0, 0.01],
//     },
//     yAxis: {
//       type: "category",
//       data: categories,
//     },
//     series: [
//       {
//         name: "Male",
//         type: "bar",
//         data: aggregateData("Male"),
//       },
//       {
//         name: "Female",
//         type: "bar",
//         data: aggregateData("Female"),
//       },
//     ],
//   };

//   myChart.setOption(option);
// }

// export default function BarchartComp({
//   data,
//   title,
// }: {
//   data: HealthData[];
//   title: string;
// }) {
//   setTimeout(() => {
//     generateBarchart(data, title);
//   }, 1000);
//   return (
//     <div
//       style={{
//         width: "95vw",
//         height: "55vh",
//         top: "1.5rem",
//       }}
//       id="bar-chart"
//     ></div>
//   );
// }
