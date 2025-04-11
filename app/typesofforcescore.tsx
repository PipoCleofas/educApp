import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";
import useScore from "@/hooks/useScore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAchievements from "@/hooks/useTrophy";
const TypesofForce = () => {
  const router = useRouter();
  const { handleGoBackPress } = useHandleClicks();
  const { addAchievement } = useAchievements();
  const { contactForceScore, setContactForceScore} = useScore(); // Ensure setter is available
  const [finalScore, setFinalScore] = useState<number | null>(null);

  const goBack = () => {
    addAchievement("Bio")
    handleGoBackPress()
  }

  useEffect(() => {
    async function calculateFinalScore() {
      let newScore = 0;

      // Retrieve the alternating Scalar/Vector values from AsyncStorage
      const puzzleAnswers = await Promise.all([
        AsyncStorage.getItem("selectedQuantity1"),
        AsyncStorage.getItem("selectedQuantity2"),
        AsyncStorage.getItem("selectedQuantity3"),
        AsyncStorage.getItem("selectedQuantity4"),
        AsyncStorage.getItem("selectedQuantity5"),
        AsyncStorage.getItem("selectedQuantity6"),
        AsyncStorage.getItem("selectedQuantity7"),
        AsyncStorage.getItem("selectedQuantity8"),
        AsyncStorage.getItem("selectedQuantity9"),
        AsyncStorage.getItem("selectedQuantity10"),
      ]);

      // Correct answers for comparison (assuming Scalar and Vector answers are correct)
      const correctAnswers = [
        "Contact Force", 
        "Non-contact Force", 
        "Non-contact Force", 
        "Non-contact Force", 
        "Contact Force",
        "Contact Force", 
        "Contact Force", 
        "Non-contact Force", 
        "Contact Force", 
        "Contact Force"
      ];

      // Calculate the score by checking if the retrieved values match the correct answers
      puzzleAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
          newScore += 1; // Award 1 points for correct answer
        }
      });

      puzzleAnswers.forEach((answer, index) => {
        if (answer !== correctAnswers[index]) {
          newScore -= 1; // Award -1 points for wrong answer
        }
      });


      // Update the scalar score and store the final score in AsyncStorage
      setContactForceScore(newScore);
      await AsyncStorage.setItem("contactForceScore", newScore.toString());

      // Set the final score state to display on the screen
      setFinalScore(newScore);
    }

    calculateFinalScore(); // Call the function to calculate the score
  }, [setContactForceScore]);

   return (
      <View style={styles.container}>
  
        <Text style={styles.title}>Types of Force</Text>
        <View style={styles.rightAnswer}>
          <Text style={styles.rightAnswerText}>The Correct Answer:</Text>
          <Text style={styles.subLetter}>
            1) Contact Force.{"\n"}{"\n"}
            2) Non-contact Force.{"\n"}{"\n"}
            3) Non-contact Force.{"\n"}{"\n"}
            4) Non-contact Force.{"\n"}{"\n"}
            5) Contact Force.{"\n"}{"\n"}
            6) Contact Force.{"\n"}{"\n"}
            7) Contact Force.{"\n"}{"\n"}
            8) Non-contact Force.{"\n"}{"\n"}
            9) Contact Force .{"\n"}{"\n"}
            10) Contact Force.{"\n"}{"\n"}
            </Text>
        </View>
  
  
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>Your score is</Text>
          <Text style={styles.scoreValue}>
            {finalScore !== null ? finalScore : contactForceScore}
          </Text>
        </View>
  
        <TouchableOpacity style={styles.goBackButton} onPress={() => router.push("/physics")}>
          <Text style={styles.goBackButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#608BC1",
      alignItems: "center",
      justifyContent: "center",
    },
    title: {
      fontSize: 35,
      fontWeight: "bold",
      color: "white",
      position: "absolute",
      top: "5%",
    },
    rightAnswer: {
      backgroundColor: '#133E87',
      padding: 24,
      top: 60,
      borderRadius: 16,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 4 },
      width: '100%',
      maxWidth: 400,
      height: '100%',
      maxHeight: 400
    },
    rightAnswerText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold' as const,
    },
  
    subLetter:{
      top: "5%",
      color: 'white',
      fontSize: 14,
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
      marginBottom: 10,
      marginTop: "10%"
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

export default TypesofForce;
