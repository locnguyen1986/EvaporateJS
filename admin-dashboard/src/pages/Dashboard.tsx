export function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-dark-200 border border-evaporate-800 rounded-xl p-6">
            <div className="h-10 w-10 rounded-lg bg-evaporate-700 mb-4" />
            <h3 className="text-sm text-gray-400">Metric {i}</h3>
            <p className="text-2xl font-bold text-white mt-1">0</p>
          </div>
        ))}
      </div>
    </div>
  );
}