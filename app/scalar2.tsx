import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";

export default function Scalar() {
  const router = useRouter();
  const { handleNextBioPicsPress3 } = useHandleClicks();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Function to handle "Next" button press
  const handleNext = async () => {
    if (selectedOption) {
      try {
                if (selectedOption !== "Vector") Alert.alert("The correct answer is Vector")
        
        await AsyncStorage.setItem("selectedQuantity2", selectedOption);
        handleNextBioPicsPress3(); // Navigate after saving
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
      <View style={styles.headerdesign}><Text style={styles.title}>Bio - Link</Text></View>
      {/* Back Button */}
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.containerBox}>
      {/* Image */}
      <Image source={require("../utils/pictures/.55.jpg")} style={styles.image} />
      <View style ={styles.background}>
      {/* Radio Buttons */}
      <View style={styles.radioGroup}>
        <TouchableOpacity style={styles.radioButton} onPress={() => setSelectedOption("Scalar")}>
          <View style={[styles.radioCircle, selectedOption === "Scalar" && styles.selected]} />
          <Text style={styles.radioText}>Scalar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.radioButton} onPress={() => setSelectedOption("Vector")}>
          <View style={[styles.radioCircle, selectedOption === "Vector" && styles.selected]} />
          <Text style={styles.radioText}>Vector</Text>
        </TouchableOpacity>
        </View>
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
  containerBox: {
    backgroundColor: '#4F959D',
    padding: 5,
    top: 10,
    borderRadius: 16,
    width: '100%',
    maxWidth: 400,
    height: '100%',
    maxHeight: 500,
    alignItems: "center"
  },
  background:{
    top: "60%",
    position: 'absolute' as const,
    height: "20%",
    width: "95%",
    backgroundColor: '#205781',
    borderRadius: 5, 
  },

  exitButton: {
    position: 'absolute' as const,
    top: 20,
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
  
  headerdesign:{
    width: '100%',
    position: 'absolute' as const,
    top: 5,
    backgroundColor: '#205781',
    paddingHorizontal: 105,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ scale: 1.2 }],
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold' as const,
    color: 'white',
    textAlign: 'center' as const,
    paddingHorizontal: 20,
    flexShrink: 1,
    flexWrap: 'wrap'
  },

  container: {
    backgroundColor: "#98D2C0",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    top:"2%",
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
    borderRadius: 10,
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
    top: "30%",
    backgroundColor: "#205781",
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