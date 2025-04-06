import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";

export default function Scalar() {
  const router = useRouter();
  const { handleMatterMatchPress20 } = useHandleClicks();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Function to handle next button press
  const handleNext = async () => {
    if (selectedOption) {
      try {
        await AsyncStorage.setItem("selectedQuantity19", selectedOption);
        handleMatterMatchPress20(); // Navigate after saving
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
      <Image source={require("../utils/pictures/milk.jpg")} style={styles.image} />

      {/* Radio Buttons */}
      <TouchableOpacity style={styles.radioButton} onPress={() => setSelectedOption("Solid")}>
        <View style={[styles.radioCircle, selectedOption === "Solid" && styles.selected]} />
        <Text style={styles.radioText}>Solid</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.radioButton} onPress={() => setSelectedOption("Liquid")}>
        <View style={[styles.radioCircle, selectedOption === "Liquid" && styles.selected]} />
        <Text style={styles.radioText}>Liquid</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.radioButton} onPress={() => setSelectedOption("Gas")}>
        <View style={[styles.radioCircle, selectedOption === "Gas" && styles.selected]} />
        <Text style={styles.radioText}>Gas</Text>
      </TouchableOpacity>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF7F3", // Changed to match the previous design
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
    backgroundColor: "#C599B6",  // Updated for consistency with the previous design
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  exitText: {
    color: "#FFF7F3",  // Updated text color to match design
    fontSize: 14,
    fontWeight: "600",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FAD0C4", // Updated to match previous button style
    padding: 12,
    marginVertical: 8,
    borderRadius: 16,
    width: "80%",
    shadowColor: "#C599B6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#C599B6",  // Consistent with previous design
    marginRight: 12,
  },
  selected: {
    backgroundColor: "#C599B6",
  },
  radioText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4F4F4F",  // Text color matches the design style
  },
  nextButton: {
    marginTop: 30,
    backgroundColor: "#E6B2BA",  // Consistent background color
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 10,
    shadowColor: "#C599B6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  nextButtonText: {
    color: "#4F4F4F",  // Matching text color with design
    fontSize: 16,
    fontWeight: "bold",
  },
});
