import React from "react";

const MODELS = [
  {
    title: "Image-based phenotyping",
    description: "Transfer-learning (EfficientNet/ResNet) for flower/leaf detection and segmentation.",
    icon: "🖼️"
  },
  {
    title: "Time-series forecasting",
    description: "LSTM / TCN or Transformer models for predicting temperature/humidity and growth metrics.",
    icon: "📈"
  },
  {
    title: "Feature models",
    description: "Random Forest / XGBoost for nutrient recommendation and yield prediction using sensor + derived features.",
    icon: "🌱"
  },
  {
    title: "Anomaly detection",
    description: "Autoencoder / Isolation Forest on multivariate sensor streams.",
    icon: "⚠️"
  }
];

export default function ML() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Machine Learning</h2>

      <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
        <h3 className="font-bold text-xl mb-6">Recommended models and tasks</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {MODELS.map((model, idx) => (
            <div key={idx} className="bg-linear-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-200 hover:border-emerald-300 transition">
              <div className="flex items-start gap-4">
                <span className="text-3xl">{model.icon}</span>
                <div>
                  <h4 className="font-bold text-lg mb-2">{model.title}</h4>
                  <p className="text-gray-700">{model.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-lg">
          <h4 className="font-bold text-lg mb-4">Why these models?</h4>
          <p className="text-gray-700 leading-relaxed mb-4">Convolutional transfer-learning works well on limited labelled plant images. LSTM/Transformers handle sequences and temporal dependencies. Tree-based methods provide explainability for agronomic decisions. We provide starter notebooks and pipelines to reproduce each task.</p>

          <h5 className="font-bold mt-6 mb-3">Key benefits:</h5>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-emerald-600">✓</span>
              <span><strong>Transfer Learning:</strong> Leverage pre-trained models on limited Anthurium-specific data.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-emerald-600">✓</span>
              <span><strong>Interpretability:</strong> Tree-based methods explain nutrient and growth decisions.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-emerald-600">✓</span>
              <span><strong>Real-time capability:</strong> Light models suitable for edge deployment.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-emerald-600">✓</span>
              <span><strong>Production ready:</strong> Models tested on actual greenhouse data.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="font-bold text-lg mb-4">Training pipeline</h4>
          <ol className="space-y-3 text-sm text-gray-700">
            <li><strong>1. Data prep:</strong> Clean sensor anomalies, align image metadata.</li>
            <li><strong>2. Feature engineering:</strong> Derive temporal features, growth rates, normalized values.</li>
            <li><strong>3. Train-test split:</strong> Temporal split to avoid leakage.</li>
            <li><strong>4. Model training:</strong> Cross-validation on historical data.</li>
            <li><strong>5. Evaluation:</strong> MAE, RMSE for regression; F1 for anomalies.</li>
            <li><strong>6. Deployment:</strong> Export to ONNX or TensorFlow Lite for edge.</li>
          </ol>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="font-bold text-lg mb-4">Expected outputs</h4>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 font-bold text-emerald-600">•</span>
              <span><strong>Growth score:</strong> 0-100 composite metric of plant health.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 font-bold text-emerald-600">•</span>
              <span><strong>Nutrient alerts:</strong> When EC or pH suggests intervention.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 font-bold text-emerald-600">•</span>
              <span><strong>Yield prediction:</strong> Estimated flower count in 30/60 days.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 font-bold text-emerald-600">•</span>
              <span><strong>Anomaly flag:</strong> Sensor malfunction or unusual plant condition.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 font-bold text-emerald-600">•</span>
              <span><strong>Recommendations:</strong> Suggested changes to irrigation or light.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
