import { useState } from "react";
import Header from "./components/Header";
import HeartDisease from "./layout/Heart-Disease/HeartDisease";
import Zomato from "./layout/Zomato/Zomato";
import StateWiseData from "./layout/StateWiseData/StateWiseData";

function App() {
  const [activeSector, setActiveSector] = useState(0);

  const SectorTitle = [
    "Indian states data",
    "Heart disease analysis",
    "Restaurant data by Zomato",
    // "Startup analysis",
  ];

  return (
    <div>
      <Header />
      <div className=" p-2 flex gap-4">
        {SectorTitle.map((title, ind) => (
          <button
            key={ind}
            className={`text-lg border p-2 rounded-lg font-medium cursor-pointer hover:bg-gray-200  ${
              activeSector === ind &&
              "text-white bg-black font-medium hover:bg-gray-950 "
            } `}
            onClick={() => setActiveSector(ind)}
          >
            {title}
          </button>
        ))}
      </div>
      {SectorTitle[activeSector] === "Heart disease analysis" && (
        <HeartDisease />
      )}
      {SectorTitle[activeSector] === "Restaurant data by Zomato" && <Zomato />}
      {SectorTitle[activeSector] === "Indian states data" && <StateWiseData />}
    </div>
  );
}

export default App;
