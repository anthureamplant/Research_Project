export default function StatCard({ label, value }) {
  return (
    <div className="bg-gray-50 p-3 rounded-lg text-sm">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}
