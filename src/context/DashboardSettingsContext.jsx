import { createContext, useContext, useState } from "react";

const DashboardSettingsContext = createContext(null);

export const DashboardSettingsProvider = ({ children }) => {
    const [showBattery, setShowBattery] = useState(true);
    const [showLocation, setShowLocation] = useState(true);
    const [ compactView, setCompactView] = useState(false);

    return (
        <DashboardSettingsContext.Provider
           value={{
            showBattery,
            setShowBattery,
            showLocation,
            setShowLocation,
            compactView,
            setCompactView,
        }}
        >
            {children}
        </DashboardSettingsContext.Provider>
    )
}

export const useDashboardSettings = () => {
    return useContext(DashboardSettingsContext);
}