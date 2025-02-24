import { useState } from "react";
import Header from "./components/Header";
import HeartDisease from "./layout/Heart-Disease/HeartDisease";

function App() {

  const [activeSector, setActiveSector] = useState(0);

  const SectorTitle = [
    "Heart Disease",
    "Zomato Data",
    "State wise data",
    "Startup Analysis",
  ];

  return (
    <div>
      <Header />
      <div className=" p-2 flex gap-4">
        {SectorTitle.map((title, ind) => (
          <button
            key={ind}
            className={`text-lg border p-2 rounded-lg font-medium cursor-pointer hover:bg-gray-200  ${activeSector === ind && "text-white bg-black font-medium hover:bg-gray-950 "} `}
            onClick={() => setActiveSector(ind)}
          >
            {title}
          </button>
        ))}
      </div>
      <HeartDisease />
    </div>
  );
}

export default App;
