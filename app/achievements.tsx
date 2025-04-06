import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { getAchievements } from "../database"; // Import the function

// Define Achievement type
interface Achievement {
  id: number;
  achievement: string;
}

const Achievements: React.FC = () => {
  const router = useRouter();
  const [achievements, setAchievements] = useState<Achievement[]>([]); // Enforce type

  // Fetch achievements when the component loads
  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = () => {
    getAchievements((data: Achievement[]) => {
      setAchievements(data); // Update the state with fetched achievements
    });
  };

  return (
    <View style={styles.container}>
      {/* Exit Button */}
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Achievements</Text>

      {/* List of Achievements */}
      {achievements.length > 0 ? (
        <FlatList
          data={achievements}
          keyExtractor={(item) => item.id.toString()} // Ensure id is converted to string
          renderItem={({ item }) => (
            <Text style={styles.achievementText}>🏆 {item.achievement}</Text>
          )}
        />
      ) : (
        <Text style={styles.noAchievements}>No Achievements Yet!</Text>
      )}

      {/* Science-themed images */}
      <Image source={require("../utils/pictures/3.png")} style={[styles.image, styles.topLeft]} />
      <Image source={require("../utils/pictures/4.png")} style={[styles.image, styles.topRight]} />
      <Image source={require("../utils/pictures/1.png")} style={[styles.image, styles.bottomLeft]} />
      <Image source={require("../utils/pictures/2.png")} style={[styles.image, styles.bottomRight]} />
      <Image source={require("../utils/pictures/5.png")} style={[styles.image, styles.middleLeft]} />
      <Image source={require("../utils/pictures/6.png")} style={[styles.image, styles.middleRight]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F4F4F",
    alignItems: "center",
    justifyContent: "center",
  },
  exitButton: {
    position: "absolute",
    top: "5%",
    left: "5%",
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
  },
  exitText: {
    color: "#fff",
    fontSize: 14,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  achievementText: {
    fontSize: 18,
    color: "#fff",
    paddingVertical: 5,
    textAlign: "center",
  },
  noAchievements: {
    fontSize: 18,
    color: "#fff",
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    position: "absolute",
  },
  topLeft: {
    top: "16%",
    left: "-1%",
    transform: [{ rotate: "-10deg" }],
  },
  topRight: {
    top: "16%",
    right: "-1%",
    transform: [{ rotate: "10deg" }],
  },
  middleLeft: {
    top: "38%",
    left: "-2%",
    transform: [{ rotate: "-8deg" }],
  },
  middleRight: {
    top: "38%",
    right: "-3%",
    transform: [{ rotate: "8deg" }],
  },
  bottomLeft: {
    bottom: "5%",
    left: "-1%",
    transform: [{ rotate: "-12deg" }],
  },
  bottomRight: {
    bottom: "5%",
    right: "-1%",
    transform: [{ rotate: "12deg" }],
  },
});

export default Achievements;
