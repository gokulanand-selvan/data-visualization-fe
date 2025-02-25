import DataDescription from "../../utils/DataDescription";
import stateData from "../../../data/states_and_ut.json";
import PieChart from "./charts/PieChart";
import { StateData } from "../../types/data";
import BarChart from "./charts/BarChart";
import ScatterPlot from "./charts/ScatterPlot";
import HeatMap from "./charts/HeatMap";
import LineChart from "./charts/LineChart";

export default function StateWiseData() {
  const title = "India States & Union Territories Dataset:";
  const description = `This dataset provides a comprehensive overview of India's States and Union Territories, offering detailed information about their administrative structure, demographics, and linguistic diversity. It serves as a valuable resource for understanding the vastness and complexity of India's regional distribution.`;

  return (
    <>
      <DataDescription title={title} description={description} />
      <PieChart data={stateData as unknown as StateData[]} />
      <LineChart data={stateData as unknown as StateData[]} />
      <BarChart data={stateData as unknown as StateData[]} />
      <ScatterPlot data={stateData as unknown as StateData[]} />
      <HeatMap data={stateData as unknown as StateData[]} />
    </>
  );
}
