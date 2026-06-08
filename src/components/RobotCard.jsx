import { useDashboardSettings } from "../context/DashboardSettingsContext";
import "../styles/Card.css";

const RobotCard= ({ robot, onSelect }) =>  {
  const { showBattery, showLocation, compactView } = useDashboardSettings();
   return (
    <div className="card">
      <h2>{robot.name}</h2>
      <p><b>Status: </b>{robot.status}</p>
      {showBattery && <p><b>Battery: </b>{robot.battery}%</p> }
      {showLocation && <p><b>Location: </b>{robot.location}</p> }

      {!compactView && <p>Mission: {robot.mission}</p>}
      
      <button onClick={() => onSelect(robot)}>
        Details
      </button>
    </div>
   )
}

export default RobotCard;