//import { Link } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition">
            <div className="w-12 h-12 rounded-full bg-linear-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold">A</div>
            <div>
              <h1 className="text-lg font-semibold">Anthurium Development And Monitoring</h1>
              <p className="text-sm text-gray-500">Smart nethouse monitoring, sensors, and ML for Anthurium growth</p>
            </div>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link to="/" className={`transition ${isActive("/") ? "text-emerald-600 font-semibold" : "hover:text-emerald-600"}`}>Overview</Link>
            <Link to="/sensors" className={`transition ${isActive("/sensors") ? "text-emerald-600 font-semibold" : "hover:text-emerald-600"}`}>Sensors</Link>
            <Link to="/architecture" className={`transition ${isActive("/architecture") ? "text-emerald-600 font-semibold" : "hover:text-emerald-600"}`}>System</Link>
            <Link to="/ml" className={`transition ${isActive("/ml") ? "text-emerald-600 font-semibold" : "hover:text-emerald-600"}`}>ML</Link>
            <Link to="/data" className={`transition ${isActive("/data") ? "text-emerald-600 font-semibold" : "hover:text-emerald-600"}`}>Data</Link>
            <Link to="/team" className={`transition ${isActive("/team") ? "text-emerald-600 font-semibold" : "hover:text-emerald-600"}`}>Team</Link>
            <Link to="/contact" className="bg-emerald-600 text-white px-4 py-2 rounded-md shadow hover:opacity-95 transition">Contact</Link>
          </nav>
        </div>
      </header>
  );
}

