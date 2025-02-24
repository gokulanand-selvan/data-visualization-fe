export default function DataDescription({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="py-2 px-4 text-lg">
      <h1 className="text-2xl font-bold underline py-2">{title}</h1>
      <p className="text-lg">{description}</p>
    </div>
  );
}
