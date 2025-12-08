import React, { useState } from "react";
import { SENSORS } from "../data/sensors";


export default function AnthuriumHero() {
  const [modal, setModal] = useState({ open: false, title: "", body: "" });

  const openModal = (title, body) => setModal({ open: true, title, body });
  const closeModal = () => setModal({ ...modal, open: false });

  return (
    <div className="min-h-screen bg-[#f6faf8] font-inter text-[#071426] p-6 md:p-12 flex flex-col items-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">
        {/* LEFT SECTION */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Anthurium Growth Monitoring & Analysis
          </h1>

          <p className="mt-4 text-[#59606a] max-w-prose">
            A complete prototype for measuring, analysing and improving Anthurium
            development using a sensor network, cloud data pipeline and machine
            learning — built for research or production-ready greenhouses.
          </p>

          <ul className="mt-5 space-y-2 text-[#59606a] list-disc list-inside">
            <li>Real-time sensors for temperature, humidity, light, soil moisture, EC/NPK.</li>
            <li>Image-based phenotyping using computer vision models.</li>
            <li>Time-series forecasting and ML for growth prediction.</li>
          </ul>

          <div className="mt-6 flex gap-4">
            <button
              className="px-4 py-2 rounded-xl bg-emerald-700 text-white shadow hover:bg-emerald-800 transition"
              onClick={() =>
                openModal(
                  "Sensors",
                  "Available sensors: Temperature, Humidity, Light (PAR), Soil moisture, EC, N, P, K."
                )
              }
            >
              Explore sensors
            </button>

            <button
              className="px-4 py-2 rounded-xl bg-white border shadow text-[#0f1720] hover:bg-gray-50 transition"
              onClick={() =>
                openModal(
                  "System architecture",
                  "Prototype architecture: sensors → MQTT → cloud ingestion → time-series DB → ML pipeline."
                )
              }
            >
              System architecture
            </button>
          </div>
        </div>

        {/* RIGHT SUMMARY CARD */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 w-full md:w-[420px] h-fit">
          <h3 className="font-semibold text-lg mb-4">Quick summary</h3>

          <div className="grid grid-cols-2 gap-4 text-sm text-[#59606a]">
            <div>
              <p className="font-semibold text-[#0f1720]">Deployment</p>
              <p>Greenhouse / Lab</p>
            </div>

            <div>
              <p className="font-semibold text-[#0f1720]">Data Types</p>
              <p>Sensor, Images, Nutrients</p>
            </div>

            <div>
              <p className="font-semibold text-[#0f1720]">ML Tasks</p>
              <p>Phenotyping, Forecasting, Anomaly detection</p>
            </div>

            <div>
              <p className="font-semibold text-[#0f1720]">Outputs</p>
              <p>Growth score, Alerts, Nutrient suggestions</p>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {modal.open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full shadow-2xl">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{modal.title}</h2>
              <button
                className="text-xl hover:text-red-600"
                onClick={closeModal}
              >
                ×
              </button>
            </div>

            <p className="mt-3 text-[#59606a]">{modal.body}</p>

            <div className="mt-5 flex justify-end">
              <button
                className="px-4 py-2 rounded-xl border bg-gray-50 hover:bg-gray-100 transition"
                onClick={() => window.location.href = "/sensor"}
              >
                View details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
