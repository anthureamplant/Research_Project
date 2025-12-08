import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-6 py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}
