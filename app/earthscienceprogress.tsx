import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import useAchievements from "@/hooks/useAchievements";

const EarthProgress = () => {
  const [progress, setProgress] = useState(0);
  const { achievements } = useAchievements();

  useEffect(() => {
    let calculatedProgress = 0;

    console.log("Achievements:", achievements);
    // Check achievements
    if (achievements.includes("Puzzle Monster")) calculatedProgress += 0.5;
    if (achievements.includes("Master Puzzle")) calculatedProgress += 0.5;

    // Ensure progress does not exceed 100%
    setProgress(Math.min(calculatedProgress, 1));
  }, [achievements]); // Recalculate progress when achievements change

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Earth Progress</Text>
      <Progress.Bar progress={progress} width={200} color="#4CAF50" />
      <Text style={styles.text}>{Math.round(progress * 100)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default EarthProgress;
