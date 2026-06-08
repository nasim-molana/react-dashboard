import useRobotStats from "../hooks/useRobotStats";
import "../styles/Reports.css";

const Reports = () => {
  const stats = useRobotStats();
  return (
    <div>
      <h2 className="page-title">Robot Performance Overview</h2>

      <div className="stats-grid">
        
        <div className="stat-card">
          <p className="label">Total Robots</p>
          <p className="value">{stats.totalRobots}</p>
        </div>

        <div className="stat-card">
          <p className="label">Online</p>
          <p className="value online">{stats.onlineRobots}</p>
        </div>

        <div className="stat-card">
          <p className="label">Offline</p>
          <p className="value offline">{stats.offlineRobots}</p>
        </div>

        <div className="stat-card">
          <p className="label">Charging</p>
          <p className="value charging">{stats.chargingRobots}</p>
        </div>

        <div className="stat-card highlight">
          <p className="label">Average Battery</p>
          <p className="value">
            {stats.averageBattery.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reports;
