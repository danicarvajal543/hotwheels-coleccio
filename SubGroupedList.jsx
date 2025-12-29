import GroupedCarList from "./components/GroupedCarList";

export default function SubGroupedList({ cars, mode }) {
  const grouped = cars
    .sort((a, b) => (a.collection_number || 0) - (b.collection_number || 0))
    .reduce((acc, car) => {
      let key = "Todos";
      if (mode === "series") key = car.series || "Sin colección";
      if (mode === "model") key = car.model || "Sin modelo";

      acc[key] = acc[key] || [];
      acc[key].push(car);
      return acc;
    }, {});

  return Object.entries(grouped).map(([key, list]) => (
    <div key={key} className="space-y-3">
      <h2 className="text-xl font-bold">{key}</h2>
      <GroupedCarList cars={list} />
    </div>
  ));
}

