export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-500 flex items-center justify-between">
        <div>© {new Date().getFullYear()} Anthurium Project</div>
        <div>Built with ❤️ using React + TailwindCSS</div>
      </div>
    </footer>
  );
}
