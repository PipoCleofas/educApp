import { useState } from "react";

const useAchievements = () => {
    const [achievements, setAchievements] = useState<any[]>([]); // 🔹 Changed from null to []

    const addAchievement = (newAchievement: any) => {
        setAchievements((prev) => [...prev, newAchievement]); // Now, prev is always an array
    };

    return {
        achievements,
        setAchievements,
        addAchievement,
    };
};

export default useAchievements;
