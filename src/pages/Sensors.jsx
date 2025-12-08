
import { SENSORS } from "../data/sensors";

export default function Sensors() {
  return (
    <section>
      <h3 className="text-2xl font-bold mb-4">Sensors & Instrumentation</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SENSORS.map((s) => (
          <div key={s.name} className="bg-white p-5 rounded-2xl shadow">
            <h4 className="font-semibold">{s.name}</h4>
            <p className="text-sm text-gray-500">{s.parameter}</p>
            <p className="mt-3 text-gray-700 text-sm">{s.purpose}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
