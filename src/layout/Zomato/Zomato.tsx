import DataDescription from "../../utils/DataDescription";
import foodData from "../../../data/Zomato-data-.json";
import BarChart from "./charts/Barchart";
import { RestaurantData } from "../../types/data";
import PieChart from "./charts/PieCart";
import ScatterPlot from "./charts/ScatterPlot";
import LineChart from "./charts/LineChart";

export default function Zomato() {
  const title = "Zomato Restaurant Data:";
  const description = `This dataset contains information about various restaurants listed on Zomato. It provides key details such as restaurant names, online order availability, table booking options, customer ratings, vote counts, approximate cost for two people, and the type of cuisine or dining experience offered.`;

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
