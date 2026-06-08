import { useDashboardSettings } from "../context/DashboardSettingsContext";
import "../styles/Card.css";

const RobotDetails = ({ robot }) => {
    const { showBattery, showLocation, compactView } = useDashboardSettings();

    if (!robot) return null;
    return (
        <section className="card">
            <h2><span>🤖</span> Robot Details</h2>
            <p><b>Name:</b> {robot.name}</p>
            <p><b>Status:</b> {robot.status}</p>
            {showBattery &&<p><b>Battery:</b> {robot.battery}%</p> }
            {showLocation &&<p><b>Location:</b> {robot.location}</p> }
            {!compactView &&<p><b>Mission:</b> {robot.mission}</p> }
        </section>
    )
}


export default RobotDetails;