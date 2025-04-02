import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";

export default function TypesofForce() {
  const router = useRouter();
  const { handleTypesOfForcwePres10 } = useHandleClicks();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Function to handle next button press
  const handleNext = async () => {
    if (selectedOption) {
      try {
        await AsyncStorage.setItem("selectedQuantity9", selectedOption);
        handleTypesOfForcwePres10(); // Navigate after saving
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
      <Image source={require("../utils/pictures/.36.jpg")} style={styles.image} />

      {/* Radio Buttons */}
      <View style={styles.radioGroup}>
        <TouchableOpacity style={styles.radioButton} onPress={() => setSelectedOption("Contact Force")}>
          <View style={[styles.radioCircle, selectedOption === "Contact Force" && styles.selected]} />
          <Text style={styles.radioText}>Contact Force</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.radioButton} onPress={() => setSelectedOption("Non-contact Force")}>
          <View style={[styles.radioCircle, selectedOption === "Non-contact Force" && styles.selected]} />
          <Text style={styles.radioText}>Non-contact Force</Text>
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
    backgroundColor: "#4F4F4F",
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
  radioGroup: {
    width: "100%",
    alignItems: "center",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
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
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#007bff",
    marginRight: 10,
  },
  selected: {
    backgroundColor: "#007bff",
  },
  radioText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
