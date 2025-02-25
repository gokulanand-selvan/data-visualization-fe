import DataDescription from "../../utils/DataDescription";
import foodData from "../../../data/Zomato-data-.json";
import BarChart from "./charts/Barchart";
import { RestaurantData } from "../../types/data";
import PieChart from "./charts/PieCart";
import ScatterPlot from "./charts/ScatterPlot";
import LineChart from "./charts/LineChart";

export default function Zomato() {
  const title = "Heart Disease Data:";
  const description = `This dataset contains various health indicators and risk factors related to heart disease. Parameters such as age, gender, blood pressure, cholesterol levels, smoking habits, and exercise patterns have been collected to analyze heart disease risk and contribute to health research. The dataset can be used by healthcare professionals, researchers, and data analysts to examine trends related to heart disease, identify risk factors, and perform various health-related analyses.`;

  return (
    <>
      <DataDescription title={title} description={description} />
      <BarChart data={foodData as unknown as RestaurantData[]} />
      <PieChart data={foodData as unknown as RestaurantData[]} />
      <ScatterPlot data={foodData as unknown as RestaurantData[]} />
      <LineChart data={foodData as unknown as RestaurantData[]} />
    </>
  );
}
