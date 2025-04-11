import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";

export default function Scalar() {
  const router = useRouter();
  const { handleMatterMatchPress3 } = useHandleClicks();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleNext = async () => {
    if (selectedOption) {
      try {
        if (selectedOption !== "Pure") Alert.alert("The correct answer is Pure.")
        await AsyncStorage.setItem("selectedQuantity2", selectedOption);
        handleMatterMatchPress3();
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
      {/* Header */}
      <View style={styles.headerDesign}>
      <Text style={styles.headerText}>Match Matter</Text>
      </View>
      {/* Back Button */}
      <TouchableOpacity style={styles.exitButton} onPress={() => router.push("/chemistry")}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>
    <View style={styles.background}>
      {/* Image */}
      <Image source={require("../utils/pictures/matchmatter/pure/gold.png")} style={styles.image} />

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
    </View>
  );
}

const styles = StyleSheet.create({
  headerDesign: {
    position: 'absolute',
    top: 5,
    backgroundColor: '#E6B2BA',
    paddingHorizontal: 140,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{ scale: 1.2 }],
  },
  headerText: {
    color: "white"
  },
  background:{
    backgroundColor: "#C599B6",
    borderRadius: 16,
    padding: 5,
    alignItems: "center",
    width: '100%',
    maxWidth: 400,
    height: '100%',
    maxHeight: 500
  },
  container: {
    backgroundColor: "#FFF7F3", // light pastel background
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    height: 250,
    resizeMode: "contain",
    marginBottom: 10,
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
    top: 20,
    left: 30,
    backgroundColor: "#E6B2BA",
  },
  exitText: {
    color: "#FFF7F3",
    fontSize: 14,
    fontWeight: "600",
  },
});