import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";
import useScore from "@/hooks/useScore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GeoLayerScore = () => {
  const router = useRouter();
  const { handleGoBackPress } = useHandleClicks();
  const [storedScore, setStoredScore] = useState<number | null>(null);

  // Fetch the score from AsyncStorage when component mounts
  useEffect(() => {
    const fetchScore = async () => {
      const score = await AsyncStorage.getItem("layerscore");
      setStoredScore(score ? parseInt(score, 10) : 0);
    };

    fetchScore();
  }, []);

  return (
    <View style={styles.container}>

    <Text style={styles.title}>Quake Puzzle</Text>

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Your score is</Text>
        <Text style={styles.scoreValue}>
          {storedScore !== null ? storedScore : "Loading..."}
        </Text>
      </View>

      <View>
        <TouchableOpacity style={styles.goBackButton} onPress={handleGoBackPress}>
          <Text style={styles.goBackButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A3333",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    top: "10%",
  },
  scoreContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD700",
    textAlign: "center",
    marginBottom: 5,
  },
  scoreValue: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#00FF00",
    textAlign: "center",
  },
  goBackButton: {
    backgroundColor: "#133E87",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  goBackButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default GeoLayerScore;