import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashboardSettingsProvider } from "./context/DashboardSettingsContext";

import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";


function App() {
  return (
    <DashboardSettingsProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Main page */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </DashboardSettingsProvider>
  );
}

export default App;
