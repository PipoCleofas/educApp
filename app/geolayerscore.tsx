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
      {/* Exit Button */}
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

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
    backgroundColor: "#4F4F4F",
    alignItems: "center",
    justifyContent: "center",
  },
  exitButton: {
    position: "absolute",
    top: "5%",
    left: "5%",
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  exitText: {
    color: "#fff",
    fontSize: 14,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    position: "absolute",
    top: "10%",
  },
  dropZone: {
    width: 200,
    height: 200,
    backgroundColor: "#ddd",
    borderWidth: 2,
    borderColor: "#aaa",
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  dropRow: {
    flexDirection: "row",
  },
  dropSlot: {
    width: 90,
    height: 90,
    backgroundColor: "#bbb",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#888",
  },
  filledSlot: {
    backgroundColor: "#eee",
  },
  draggableItem: {
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  checkButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
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
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
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
  checkText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GeoLayerScore;
