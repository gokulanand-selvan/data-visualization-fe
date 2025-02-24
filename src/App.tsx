import Header from "./components/Header";
import HeartDisease from "./layout/Heart-Disease/HeartDisease";

function App() {
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
            className="text-lg border p-2 rounded-lg font-medium cursor-pointer hover:bg-gray-200 "
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
