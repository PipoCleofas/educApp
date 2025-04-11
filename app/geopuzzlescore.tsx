import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GeoPuzzleScore = () => {
  const router = useRouter();
  const [finalScore, setFinalScore] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    const calculateScore = async () => {
      console.log("\n=== STARTING SCORE CALCULATION ===");
      
      try {
        // Retrieve all values
        const results = await Promise.all([
          AsyncStorage.getItem("puzzleCorrect1"),
          AsyncStorage.getItem("puzzleCorrect2"),
          AsyncStorage.getItem("puzzleCorrect3"),
          AsyncStorage.getItem("puzzleCorrect4"),
          AsyncStorage.getItem("puzzleCorrect5"),
        ]);

        console.log("Raw results from storage:", results);

        // Calculate score with debugging
        let score = 0;
        results.forEach((result, index) => {
          const questionNum = index + 1;
          if (result === "true") {
            console.log(`Question ${questionNum}: ✅ Correct`);
            score++;
          } else if (result === "false") {
            console.log(`Question ${questionNum}: ❌ Incorrect`);
          } else {
            console.log(`Question ${questionNum}: ⚠️ No answer found`);
          }
        });

        console.log("Calculated score:", score);
        setFinalScore(score);

        // Save final score with verification
        await AsyncStorage.setItem("scorenigelayer", score.toString());
        const verifyScore = await AsyncStorage.getItem("geoPuzzleFinalScore");
        console.log("Verified stored score:", verifyScore);

      } catch (error) {
        console.error("SCORE CALCULATION ERROR:", error);
      }

      console.log("=== SCORE CALCULATION COMPLETE ===");
    };

    calculateScore();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.exitButton} onPress={() => router.push("/earthsci")}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Geo Puzzle Results</Text>

      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Your Score</Text>
        <Text style={styles.scoreValue}>
          {finalScore} / 5
        </Text>
      </View>

      <View style={styles.answerContainer}>
        <Text style={styles.answerTitle}>Correct Answers:</Text>
        <Text style={styles.answerText}>1. Normal Fault</Text>
        <Text style={styles.answerText}>2. Earthquake</Text>
        <Text style={styles.answerText}>3. Hanging Wall</Text>
        <Text style={styles.answerText}>4. Reverse Fault</Text>
        <Text style={styles.answerText}>5. Seismic Activity</Text>
      </View>

      <TouchableOpacity 
        style={styles.goBackButton} 
        onPress={() => router.push("/earthsci")}
      >
        <Text style={styles.goBackButtonText}>Return to Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4a3333",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  exitButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
  },
  exitText: {
    color: "#fff",
    fontSize: 14,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#f2feca",
    marginBottom: 30,
  },
  scoreContainer: {
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 20,
    borderRadius: 15,
    width: "80%",
    alignItems: "center",
    marginBottom: 30,
  },
  scoreText: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 10,
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#98d083",
  },
  answerContainer: {
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 20,
    borderRadius: 15,
    width: "80%",
    marginBottom: 30,
  },
  answerTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  answerText: {
    fontSize: 16,
    color: "#bcfcc9",
    marginBottom: 8,
  },
  goBackButton: {
    backgroundColor: "#98d083",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  goBackButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default GeoPuzzleScore;