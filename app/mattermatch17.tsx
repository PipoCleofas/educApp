import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";

export default function Scalar() {
  const router = useRouter();
  const { handleMatterMatchPress18 } = useHandleClicks();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleNext = async () => {
    if (selectedOption) {
      try {
        await AsyncStorage.setItem("selectedQuantity17", selectedOption);
        handleMatterMatchPress18();
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

      {/* Image */}
      <Image source={require("../utils/pictures/co2.jpg")} style={styles.image} />

      {/* Radio Buttons */}
      {["Solid", "Liquid", "Gas"].map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.radioButton,
            selectedOption === option && styles.radioButtonSelected,
          ]}
          onPress={() => setSelectedOption(option)}
        >
          <View style={[styles.radioCircle, selectedOption === option && styles.radioCircleSelected]} />
          <Text style={styles.radioText}>{option}</Text>
        </TouchableOpacity>
      ))}

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF7F3",  // Adjusted background color from the previous design
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 30,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  exitButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#C599B6", // Adjusted to match previous design's exit button style
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  exitText: {
    color: "#FFF7F3",  // Light text color to match the background
    fontSize: 14,
    fontWeight: "600",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAD0C4",  // Matching button colors with previous design
    padding: 12,
    marginVertical: 8,
    borderRadius: 16,
    width: "80%",
    shadowColor: "#C599B6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  radioButtonSelected: {
    backgroundColor: "#C599B6",  // Selected radio button style to match
  },
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#C599B6",  // Circle border color adjusted for the previous design style
    marginRight: 12,
  },
  radioCircleSelected: {
    backgroundColor: "#C599B6",
  },
  radioText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4F4F4F",  // Adjusted text color to match previous design
  },
  nextButton: {
    marginTop: 30,
    backgroundColor: "#E6B2BA",  // Consistent button color with the previous design
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 10,
    shadowColor: "#C599B6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  nextButtonText: {
    color: "#4F4F4F",  // Text color aligned with previous style
    fontSize: 16,
    fontWeight: "bold",
  },
});
