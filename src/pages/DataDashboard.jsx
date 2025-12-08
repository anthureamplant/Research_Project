import StatCard from "../components/StatCard";

export default function DataDashboard() {
  return (
    <section>
      <h3 className="text-2xl font-bold mb-4">Live Sensor Dashboard</h3>

      <div className="grid grid-cols-2 gap-4">
        <StatCard label="Temperature" value="25.4°C" />
        <StatCard label="Humidity" value="78%" />
        <StatCard label="Soil Moisture" value="56%" />
        <StatCard label="EC" value="1.8 mS/cm" />
      </div>
    </section>
  );
}
