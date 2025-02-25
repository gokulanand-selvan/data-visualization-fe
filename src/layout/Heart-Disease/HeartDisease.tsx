import DataDescription from "../../utils/DataDescription";
import heartData from "../../../data/heart_disease.json";
import { HealthData } from "../../types/data";
import MultiLineChartComp from "./charts/MultiLineChartComp";
import Piechart from "./charts/Piechart";
import BoxPlot from "./charts/BoxPlot";
import HeatMap from "./charts/HeatMap";
import ScatterPlot from "./charts/ScatterPlot";
import RegressionPlot from "./charts/RegressionPlot";

export default function HeartDisease() {
  const title = "Heart Disease Data:";
  const description = `This dataset contains various health indicators and risk factors related to heart disease. Parameters such as age, gender, blood pressure, cholesterol levels, smoking habits, and exercise patterns have been collected to analyze heart disease risk and contribute to health research. The dataset can be used by healthcare professionals, researchers, and data analysts to examine trends related to heart disease, identify risk factors, and perform various health-related analyses.`;

  return (
    <>
      <DataDescription title={title} description={description} />
      {/* <BarchartComp data={heartData as HealthData[]} title={"Heart Disease"} /> */}
      <Piechart data={heartData as unknown as HealthData[]} />
      <MultiLineChartComp
        data={heartData as unknown as HealthData[]}
        title={"Heart Disease"}
      />
      <HeatMap data={heartData as unknown as HealthData[]} />
      <ScatterPlot data={heartData as unknown as HealthData[]} />
      <BoxPlot data={heartData as unknown as HealthData[]} />
      <RegressionPlot data={heartData as unknown as HealthData[]} />
    </>
  );
}
