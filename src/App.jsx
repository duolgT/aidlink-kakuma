
import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import EmergencyPage from "./pages/EmergencyPage";
import ReportPage from "./pages/ReportPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route
          path="services/:id"
          element={<ServiceDetailsPage />}
        />
        <Route path="emergency" element={<EmergencyPage />} />
        <Route path="report" element={<ReportPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
