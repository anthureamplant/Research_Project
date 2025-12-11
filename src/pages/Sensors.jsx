import { SENSORS } from "../data/sensors";

export default function Sensors() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Sensors And Instrumentation</h2>

      <p className="text-gray-700 mb-8 text-lg">Below are the typical sensors used for Anthurium monitoring. Each card includes parameter, purpose and quick notes.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SENSORS.map((s) => (
          <div key={s.name} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-lg">{s.name}</h3>
                <p className="text-sm text-emerald-600 font-medium">{s.parameter}</p>
              </div>
              <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded text-gray-600">{s.cost}</span>
            </div>
            <p className="text-gray-700 text-sm mb-4">{s.purpose}</p>
            <ul className="text-xs text-gray-600 space-y-1">
              {s.notes.map((n, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
