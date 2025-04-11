import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";

export default function PicsWord() {
  const router = useRouter();
  const { handleNext4Pics1WordPress1 } = useHandleClicks();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Function to handle "Next" button press
  const handleNext = async () => {
    if (selectedOption) {
      try {
        if (selectedOption !== "Force") Alert.alert("The correct answer is Force")
        await AsyncStorage.setItem("selectedQuantity1", selectedOption);
        handleNext4Pics1WordPress1(); // Navigate after saving
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
      <View style={styles.headerdesign}><Text style={styles.title}>4 pics 1 word</Text></View>
        <TouchableOpacity style={styles.exitButton} onPress={() => router.push("/physics")}>
          <Text style={styles.exitText}>Back</Text>
        </TouchableOpacity>

    <View style={styles.containerBox}>
      {/* Hint */}
      <Text style={styles.hintText}>Hint: <Text style={styles.hintHighlight}>FROEC</Text></Text>

      {/* Image */}
      <Image source={require("../utils/pictures/.25.jpg")} style={styles.image} />

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#98D2C0",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  headerdesign:{
    position: 'absolute' as const,
    top: 5,
    backgroundColor: '#205781',
    paddingHorizontal: 150,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{ scale: 1.2 }],
  },

  title: {
    top: 0,
    fontSize: 22,
    fontWeight: 'bold' as const,
    marginBottom: 5,
    color: 'white',
    textAlign: 'center'
  },
  
  containerBox: {
    backgroundColor: '#4F959D',
    padding: 5,
    top: 40,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    width: '100%',
    maxWidth: 400,
    height: '100%',
    maxHeight: 450,
    alignItems: "center"
  },

  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },
  exitButton: {
    position: 'absolute' as const,
    top: 25,
    left: 25,
    paddingVertical: 8,
    paddingHorizontal: 8,
    height: 40,
    width: 50,
    backgroundColor: '#205781',
    borderRadius: 8, 
  },

  exitText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500' as const,
  },
  hintText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFD700",
    marginTop: 10,
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
    marginTop: 5,
    backgroundColor: "#205781",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

});