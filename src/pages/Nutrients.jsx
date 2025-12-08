// Nutrients.js
// Nutrient Monitoring Page (NPK + EC + pH)

export default function Nutrients() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Nutrient Levels</h1>

      <p className="mb-6">
        This page displays Nitrogen (N), Phosphorus (P), Potassium (K), Electrical Conductivity (EC),
        and pH data for the Anthurium growth monitoring system.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold">Nitrogen (N)</h2>
          <p className="text-gray-600">Value will appear here...</p>
        </div>

        <div className="p-4 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold">Phosphorus (P)</h2>
          <p className="text-gray-600">Value will appear here...</p>
        </div>

        <div className="p-4 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold">Potassium (K)</h2>
          <p className="text-gray-600">Value will appear here...</p>
        </div>

        <div className="p-4 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold">Electrical Conductivity (EC)</h2>
          <p className="text-gray-600">Value will appear here...</p>
        </div>

        <div className="p-4 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold">pH Level</h2>
          <p className="text-gray-600">Value will appear here...</p>
        </div>
      </div>
    </div>
  );
}
