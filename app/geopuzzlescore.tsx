import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";
import useScore from "@/hooks/useScore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PuzzleFifth = () => {
  const router = useRouter();
  const { handleGoBackPress } = useHandleClicks();
  const { geoPuzzleScore, setGeoPuzzleScore } = useScore(); // Ensure setter is available
  const [finalScore, setFinalScore] = useState<number | null>(null);

  useEffect(() => {
    async function calculateFinalScore() {
      let newScore = 0;

      const puzzleAnswers = await Promise.all([
        AsyncStorage.getItem("puzzleAnswer1"),
        AsyncStorage.getItem("puzzleAnswer2"),
        AsyncStorage.getItem("puzzleAnswer3"),
        AsyncStorage.getItem("puzzleAnswer4"),
        AsyncStorage.getItem("puzzleAnswer5"),
      ]);

      const correctAnswers = [
        "Normal Fault",
        "Earthquake",
        "Hanging Wall",
        "Reverse Fault",
        "Seismic Activity",
      ];

      puzzleAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
          newScore += 2;
        }
      });

      setGeoPuzzleScore(newScore);
      await AsyncStorage.setItem("geoPuzzleFinalScore", newScore.toString());
      setFinalScore(newScore);
    }

    calculateFinalScore();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Earth Science</Text>

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Trophy</Text>
        <Text style={styles.scoreValue}>
          {finalScore !== null ? finalScore : geoPuzzleScore}
        </Text>
      </View>

      <TouchableOpacity style={styles.goBackButton} onPress={handleGoBackPress}>
        <Text style={styles.goBackButtonText}>Go Back</Text>
      </TouchableOpacity>
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
});

export default PuzzleFifth;
