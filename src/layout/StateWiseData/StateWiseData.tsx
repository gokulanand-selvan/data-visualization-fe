import DataDescription from "../../utils/DataDescription";
import stateData from "../../../data/states_and_ut.json";

export default function StateWiseData() {
  const title = "Heart Disease Data:";
  const description = `This dataset contains various health indicators and risk factors related to heart disease. Parameters such as age, gender, blood pressure, cholesterol levels, smoking habits, and exercise patterns have been collected to analyze heart disease risk and contribute to health research. The dataset can be used by healthcare professionals, researchers, and data analysts to examine trends related to heart disease, identify risk factors, and perform various health-related analyses.`;

  return (
    <>
      <DataDescription title={title} description={description} />
    </>
  );
}
