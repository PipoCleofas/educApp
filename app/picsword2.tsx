import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";

export default function PicsWord() {
  const router = useRouter();
  const { handleNext4Pics1WordPress2 } = useHandleClicks();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Function to handle "Next" button press
  const handleNext = async () => {
    if (selectedOption) {
      try {
        await AsyncStorage.setItem("selectedQuantity2", selectedOption);
        handleNext4Pics1WordPress2(); // Navigate after saving
      } catch (error) {
        console.error("Error saving selection:", error);
        Alert.alert("Error", "Failed to save selection.");
      }
    } else {
      Alert.alert("Please select an option before proceeding.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      {/* Hint */}
      <Text style={styles.hintText}>Hint: <Text style={styles.hintHighlight}>SHUP</Text></Text>

      {/* Image */}
      <Image source={require("../utils/pictures/.26.jpg")} style={styles.image} />

      {/* Text Input */}
      <TextInput
        style={styles.textInput}
        placeholder="Enter your answer"
        placeholderTextColor="#98D2C0" // Placeholder color matching the new scheme
        onChangeText={(text) => setSelectedOption(text)}
      />

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#205781", // Deep blue background
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },
  exitButton: {
    position: "absolute",
    top: "5%",
    left: "5%",
    backgroundColor: "#98D2C0", // Light teal background for exit button
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  exitText: {
    color: "#F6F8D5", // Off-white text color for exit button
    fontSize: 14,
  },
  hintText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F6F8D5", // Off-white color for the hint text
    marginBottom: 10,
  },
  hintHighlight: {
    color: "#F6F8D5", // Soft off-white color for the highlighted hint
  },
  textInput: {
    width: "80%",
    height: 50,
    borderWidth: 2,
    borderColor: "#4F959D", // Lighter teal border color
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#F6F8D5", // Off-white text color
    backgroundColor: "#4F959D", // Light teal background for text input
    marginBottom: 20,
    textAlign: "center",
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: "#98D2C0", // Light teal background for next button
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  nextButtonText: {
    color: "#205781", // Deep blue text color for the next button
    fontSize: 16,
    fontWeight: "bold",
  },
});
