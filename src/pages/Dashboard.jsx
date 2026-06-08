import { useState } from "react";
import { robots } from "../data/robots";
import RobotCard from "../components/RobotCard";
import RobotDetails from "../components/RobotDetails";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [selectedRobot, setSelectedRobot] = useState(null)
  return (
    <>
      <div className="dashboard-grid">
        {robots.map((robot) => (
          <RobotCard 
            key={robot.id} 
            robot={robot}
            onSelect={setSelectedRobot} />
        ))}
      </div>

      {selectedRobot && (
        <RobotDetails robot={selectedRobot} />
      )}
    </>

  );
};

export default Dashboard;
