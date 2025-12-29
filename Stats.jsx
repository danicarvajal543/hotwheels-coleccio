export default function Stats({ cars }) {
  const byCollection = cars.reduce((acc, c) => {
    acc[c.collection_type] = (acc[c.collection_type] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="stat">Total: {cars.length}</div>
      <div className="stat">En caja: {byCollection.in_box || 0}</div>
      <div className="stat">Sin caja: {byCollection.no_box || 0}</div>
    </div>
  );
}
