import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";

export default function Scalar() {
  const router = useRouter();
  const { handleMatterMatchPress2 } = useHandleClicks();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleNext = async () => {
    if (selectedOption) {
      try {
        await AsyncStorage.setItem("selectedQuantity1", selectedOption);
        handleMatterMatchPress2();
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
      <Image source={require("../utils/pictures/tea.jpg")} style={styles.image} />

      {/* Radio Buttons */}
      <View style={styles.radioGroup}>
        <TouchableOpacity style={styles.radioButton} onPress={() => setSelectedOption("Pure")}>
          <View style={[styles.radioCircle, selectedOption === "Pure" && styles.selected]} />
          <Text style={styles.radioText}>Pure</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.radioButton} onPress={() => setSelectedOption("Mixture")}>
          <View style={[styles.radioCircle, selectedOption === "Mixture" && styles.selected]} />
          <Text style={styles.radioText}>Mixture</Text>
        </TouchableOpacity>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF7F3", // light pastel background
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
  },
  radioGroup: {
    width: "100%",
    alignItems: "center",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#FAD0C4", // soft highlight
    borderRadius: 10,
    width: "80%",
    justifyContent: "flex-start",
    shadowColor: "#C599B6",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#C599B6",
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  selected: {
    backgroundColor: "#C599B6",
  },
  radioText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4F4F4F",
  },
  nextButton: {
    marginTop: 30,
    backgroundColor: "#E6B2BA",
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 10,
    shadowColor: "#C599B6",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  nextButtonText: {
    color: "#4F4F4F",
    fontSize: 16,
    fontWeight: "bold",
  },
  exitButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#C599B6",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  exitText: {
    color: "#FFF7F3",
    fontSize: 14,
    fontWeight: "600",
  },
});
