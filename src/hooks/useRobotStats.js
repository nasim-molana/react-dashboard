import { useMemo } from "react";
import { robots } from "../data/robots";

const useRobotStats= () => {
    const stats = useMemo(() => {
        const totalRobots = robots.length;

        const onlineRobots = robots.filter((robot) => robot.status === "online").length;
        const offlineRobots = robots.filter((robot) => robot.status === "offline").length;
        const chargingRobots = robots.filter((robot) => robot.status === "charging").length;

        const averageBattery = robots.reduce((acc, robot) => acc + robot.battery, 0) / totalRobots;

        return {
            totalRobots,
            onlineRobots,
            offlineRobots,
            chargingRobots,
            averageBattery,
        }
    }, []);

    return stats;
}

export default useRobotStats;