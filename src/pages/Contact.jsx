import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ email: "", message: "" });
    }, 3000);
  };
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Contact & Get the code</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="font-bold text-xl mb-4">Request the repository</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Want the full code, dataset export or deployment instructions? Add your email below and we will send the repo and starter scripts.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email address</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message (optional)</label>
              <textarea
                placeholder="Let us know your interest area or use case..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition resize-none"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:opacity-95 transition shadow-md"
              >
                Request code
              </button>
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Download demo CSV
              </button>
            </div>
            {submitted && (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 p-4 rounded-lg text-sm">
                Thanks! We'll send the repository link to your email shortly.
              </div>
            )}
          </form>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h4 className="font-bold text-xl mb-4">Repository</h4>
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              Access the GitHub repository for cloning and deployment steps. The repo contains:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">→</span>
                <span>Edge scripts and firmware for ESP32 / Raspberry Pi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">→</span>
                <span>Cloud ingestion pipeline and database migrations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">→</span>
                <span>Jupyter notebooks for model training and analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">→</span>
                <span>Dashboard frontend code (React + Tailwind)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">→</span>
                <span>Docker Compose for local development</span>
              </li>
            </ul>
            <a href="#" className="inline-block mt-4 text-emerald-600 font-semibold hover:text-emerald-700">
              View on GitHub →
            </a>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h4 className="font-bold text-xl mb-4">License & Citation</h4>
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              <strong>License:</strong> MIT for code, CC-BY 4.0 for datasets and documentation.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Citation:</strong> If you use this project in research, please cite:
            </p>
            <div className="bg-gray-50 p-3 rounded mt-3 text-xs font-mono text-gray-800 overflow-auto">
              Chen, S., et al. (2024). Anthurium Development & Monitoring: A Smart Greenhouse System. GitHub repository.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 bg-linear-to-r from-emerald-50 to-blue-50 p-8 rounded-xl border border-emerald-200">
        <h3 className="font-bold text-xl mb-4">Contact information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-semibold text-gray-900 mb-2">📧 Email</p>
            <p className="text-gray-700">contact@anthuriumproject.org</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-2">🔗 Social</p>
            <p className="text-gray-700">Follow us on GitHub and Twitter for updates</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-2">📍 Location</p>
            <p className="text-gray-700">Research Center, University of Agriculture</p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white p-8 rounded-xl shadow-lg">
        <h3 className="font-bold text-xl mb-4">Quick links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Documentation</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#" className="text-emerald-600 hover:text-emerald-700">Getting started guide</a></li>
              <li><a href="#" className="text-emerald-600 hover:text-emerald-700">API reference</a></li>
              <li><a href="#" className="text-emerald-600 hover:text-emerald-700">Hardware assembly</a></li>
              <li><a href="#" className="text-emerald-600 hover:text-emerald-700">Cloud deployment</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Community</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#" className="text-emerald-600 hover:text-emerald-700">Discussion forum</a></li>
              <li><a href="#" className="text-emerald-600 hover:text-emerald-700">Report issues</a></li>
              <li><a href="#" className="text-emerald-600 hover:text-emerald-700">Contributing guide</a></li>
              <li><a href="#" className="text-emerald-600 hover:text-emerald-700">Case studies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}