export default function CarList({ cars }) {
  if (cars.length === 0) {
    return <p className="text-slate-500">No hay carros aún.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cars.map(car => (
        <div key={car.id} className="bg-white rounded-xl p-4 shadow">
          {car.photo_url && (
            <img src={car.photo_url} className="h-40 w-full object-cover rounded-lg mb-3" />
          )}
          <h3 className="font-bold">{car.name}</h3>
          <p className="text-sm text-slate-500">{car.model}</p>
          <p className="text-xs">Colección: {car.hw_collection}</p>
          <p className="text-xs">#{car.collection_number}</p>
        </div>
      ))}
    </div>
  );
}
