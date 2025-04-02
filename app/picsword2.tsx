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
        placeholderTextColor="#aaa"
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
  hintText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 10,
  },
  hintHighlight: {
    color: "#FFA500",
  },
  textInput: {
    width: "80%",
    height: 50,
    borderWidth: 2,
    borderColor: "#007bff",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#fff",
    backgroundColor: "#333",
    marginBottom: 20,
    textAlign: "center",
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
