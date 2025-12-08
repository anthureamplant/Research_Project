
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold">
            A
          </div>
          <div>
            <h1 className="text-lg font-semibold">Anthurium Development & Monitoring</h1>
          </div>
        </div>

        <nav className="flex items-center gap-6 text-sm">
          <Link to="/" className="hover:underline">Overview</Link>
          <Link to="/sensors" className="hover:underline">Sensors</Link>
          <Link to="/architecture" className="hover:underline">System</Link>
          <Link to="/ml" className="hover:underline">ML</Link>
          <Link to="/data" className="hover:underline">Data</Link>
          <Link to="/team" className="hover:underline">Team</Link>
          <Link to="/contact" className="bg-emerald-600 text-white px-4 py-2 rounded-md shadow hover:opacity-95">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

