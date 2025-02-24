import DataDescription from "../utils/DataDescription";
import heartData from "../utils/data/heart_disease.json";
import BarchartComp from "../components/charts/Barchart";
import { HealthData } from "../types/data";
import MultiLineChartComp from "../components/charts/MultiLineChartComp";

export default function HeartDisease() {
  const title = "Heart Disease Data:";
  const description = `This dataset contains various health indicators and risk factors related to heart disease. Parameters such as age, gender, blood pressure, cholesterol levels, smoking habits, and exercise patterns have been collected to analyze heart disease risk and contribute to health research. The dataset can be used by healthcare professionals, researchers, and data analysts to examine trends related to heart disease, identify risk factors, and perform various health-related analyses.`;

  return (
    <>
      <DataDescription title={title} description={description} />
      {/* <BarchartComp data={heartData as HealthData[]} title={"Heart Disease"} /> */}
      <MultiLineChartComp
        data={heartData as unknown as HealthData[]}
        title={"Heart Disease"}
      />
    </>
  );
}
