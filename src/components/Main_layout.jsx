import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

// ---------------------- Navbar ----------------------
export function Navbar({ onToggle }) {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Anthurium Monitoring System</h1>

      {/* Mobile menu button */}
      <button className="md:hidden block" onClick={onToggle}>
        <Menu size={28} />
      </button>
    </header>
  );
}

// ---------------------- Sidebar ----------------------
export function Sidebar({ isOpen, onClose }) {
  return (
    <aside
      className={`
        bg-white shadow-xl h-full w-64 p-6 flex flex-col gap-4 fixed md:static 
        top-0 left-0 z-50 transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
    >
      {/* Close button for mobile */}
      <button
        className="md:hidden self-end mb-4"
        onClick={onClose}
      >
        <X size={28} />
      </button>

      <nav className="flex flex-col gap-4 text-lg">

        <Link to="/" className="hover:text-blue-600">Dashboard</Link>
        <Link to="/sensors" className="hover:text-blue-600">Sensors</Link>
        <Link to="/analysis" className="hover:text-blue-600">Plant Analysis</Link>
        <Link to="/environment" className="hover:text-blue-600">Environment</Link>
        <Link to="/nutrients" className="hover:text-blue-600">Nutrients</Link>
        <Link to="/settings" className="hover:text-blue-600">Settings</Link>

      </nav>
    </aside>
  );
}

// ---------------------- Main Layout Wrapper ----------------------
export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-0 md:ml-64">

        <Navbar onToggle={() => setSidebarOpen(!sidebarOpen)} />

        <main className="p-6 overflow-y-auto h-full">
          {children}
        </main>
      </div>
    </div>
  );
}
