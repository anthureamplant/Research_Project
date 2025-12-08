export default function PersonCard({ name, role, note }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg text-sm">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
          {name[0]}
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-xs text-gray-500">{role}</div>
        </div>
      </div>
      <div className="mt-3 text-xs text-gray-600">{note}</div>
    </div>
  );
}
