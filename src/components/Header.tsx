export default function Header() {
  return (
    <div className="px-2 py-6 bg-black text-white flex justify-between items-center">
      <div className="text-2xl font-bold">Visualize Data</div>
      <a
        style={{ color: "white" }}
        href="https://www.gokulanand.in" target="_blank" className="text-xl px-4 font-semibold ">About me</a>
    </div>
  );
}