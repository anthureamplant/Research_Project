import React from "react";

function StatCard({ label, value }) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="text-xs font-semibold text-gray-500 mb-1">{label}</div>
      <div className="text-2xl font-bold text-emerald-600">{value}</div>
    </div>
  );
}

export default function Data() {

  const images = [
    { src: "/images/Month0.jpg", label: "Day 10" },
    { src: "/images/Month1.jpg", label: "Day 25" },
    { src: "/images/Month2.jpg", label: "Day 55" },
    { src: "/images/Month4.jpg", label: "Month 3" },
    { src: "/images/Month5.jpg", label: "Month 4" },
    { src: "/images/Month6.png", label: "Month 5" },
  ];
  const [selectedImage, setSelectedImage] = React.useState(null);


  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Data And Dashboard</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="font-bold text-xl mb-2">Live sensor preview</h3>
          <p className="text-gray-600 text-sm mb-6">Simulated real-time widgets — hook up to your MQTT or REST endpoint to populate live values.</p>

          <div className="grid grid-cols-2 gap-4">
            <StatCard label="Temperature" value="25.4 °C" />
            <StatCard label="Humidity" value="78 %" />
            <StatCard label="Soil Moisture" value="56 %" />
            
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="font-bold text-xl mb-2">Image gallery</h3>
          <p className="text-gray-600 text-sm mb-6">
             stored images (daily snapshots).
          </p>

          <div className="grid grid-cols-3 gap-3">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(img)}
                className="relative h-24 rounded-lg overflow-hidden border border-gray-200 hover:border-emerald-400 transition cursor-pointer group"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-end">
                  <span className="text-white text-xs p-2">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full mx-4 bg-white rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.label}
              className="w-full h-auto object-contain"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-black/60 text-white rounded-full px-3 py-1 text-sm hover:bg-black"
            >
              ✕
            </button>

            <div className="p-4 text-center text-sm text-gray-700">
              {selectedImage.label}
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
        <h3 className="font-bold text-xl mb-6">Database schema</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left py-3 px-4 font-bold">Table</th>
                <th className="text-left py-3 px-4 font-bold">Key columns</th>
                <th className="text-left py-3 px-4 font-bold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-4 font-semibold">sensor_readings</td>
                <td className="py-4 px-4 text-gray-600">timestamp, device_id, temp, humidity, light, moisture, ec, ph</td>
                <td className="py-4 px-4 text-gray-600">Store sensor data points</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-4 font-semibold">plant_images</td>
                <td className="py-4 px-4 text-gray-600">timestamp, device_id, image_url, phenotype_data</td>
                <td className="py-4 px-4 text-gray-600">Store image references and ML outputs</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-4 font-semibold">ml_predictions</td>
                <td className="py-4 px-4 text-gray-600">timestamp, device_id, growth_score, yield_forecast, alerts</td>
                <td className="py-4 px-4 text-gray-600">Store ML model outputs</td>
              </tr>
              <tr>
                <td className="py-4 px-4 font-semibold">devices</td>
                <td className="py-4 px-4 text-gray-600">id, name, location, device_type, created_at</td>
                <td className="py-4 px-4 text-gray-600">Manage connected edge devices</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-linear-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200">
        <h3 className="font-bold text-xl mb-4">Common queries</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-semibold text-blue-900 mb-2">📊 Get latest sensor readings</p>
            <p className="text-gray-700">SELECT * FROM sensor_readings WHERE device_id = $1 ORDER BY timestamp DESC LIMIT 1;</p>
          </div>
          <div>
            <p className="font-semibold text-blue-900 mb-2">📈 Fetch 7-day average temperature</p>
            <p className="text-gray-700">SELECT AVG(temp) FROM sensor_readings WHERE timestamp  NOW() - INTERVAL 7 DAY;</p>
          </div>
          <div>
            <p className="font-semibold text-blue-900 mb-2">🚨 Get active alerts</p>
            <p className="text-gray-700">SELECT * FROM ml_predictions WHERE alerts IS NOT NULL ORDER BY timestamp DESC;</p>
          </div>
          <div>
            <p className="font-semibold text-blue-900 mb-2">🖼️ Recent plant images</p>
            <p className="text-gray-700">SELECT * FROM plant_images WHERE device_id = $1 ORDER BY timestamp DESC LIMIT 10;</p>
          </div>
        </div>
      </div>
    </div>
  );
}