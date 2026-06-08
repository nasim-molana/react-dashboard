import { useDashboardSettings } from "../context/DashboardSettingsContext";
import "../styles/Settings.css";

const Settings = () => {
  const {
    showBattery,
    setShowBattery,
    showLocation,
    setShowLocation,
    compactView,
    setCompactView,
  } = useDashboardSettings()
  return (
    <div>
      <h2 className="page-title">Robot System Settings</h2>
      <div className="settings-card">
        <h3> Dashboard Preferences </h3>

        <label className="settings-option">
          <input type="checkbox" checked={showBattery} onChange={(event) => setShowBattery(event.target.checked)}  />
          Show battery information
        </label>

        <label className="settings-option">
          <input type="checkbox" checked={showLocation} onChange={(event) => setShowLocation(event.target.checked)}  />
          Show robot location
        </label>

        <label className="settings-option">
          <input type="checkbox" checked={compactView} onChange={(event) => setCompactView(event.target.checked)}  />
          Enable compact view
        </label>

      </div>
    </div>
  );
};

export default Settings;
