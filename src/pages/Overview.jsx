import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-4">Anthurium Growth Monitoring And Analysis</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">A complete prototype for measuring, analysing and improving Anthurium development using a sensor network, cloud data pipeline and machine learning built for research or production-ready net houses.</p>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Real-time sensors for temperature, humidity, light, soil moisture, EC/NPK.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Image-based phenotyping using computer vision models.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Time-series forecasting and feature-based ML for growth prediction.</span>
            </li>
          </ul>
          <div className="flex gap-3">
            <Link to="/sensors" className="px-6 py-3 bg-emerald-600 text-white rounded-md shadow hover:opacity-95 transition font-medium">Explore sensors</Link>
            <Link to="/architecture" className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition font-medium">System architecture</Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="font-bold text-lg mb-4">Quick summary</h3>
          <dl className="grid grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <dt className="text-xs font-semibold text-gray-500 mb-1">Deployment</dt>
              <dd className="font-semibold">Nethouse / Lab</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-gray-500 mb-1">Data Types</dt>
              <dd className="font-semibold">Sensor, Images, Nutrient measurements</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-gray-500 mb-1">ML Tasks</dt>
              <dd className="font-semibold">Phenotyping, Forecasting, Anomaly detection</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-gray-500 mb-1">Outputs</dt>
              <dd className="font-semibold">Growth score, Alerts, Nutrient recommendations</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
