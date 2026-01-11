import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";

import Overview from "./pages/Overview";
import Sensors from "./pages/Sensors";
import Architecture from "./pages/Architecture";
import ML from "./pages/ML";
import DataDashboard from "./pages/DataDashboard";
import Indvidual from "./pages/Indvidual";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/sensors" element={<Sensors />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/ml" element={<ML />} />
          <Route path="/data" element={<DataDashboard />} />
          <Route path="/Indvidual" element={<Indvidual />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
