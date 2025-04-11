import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  TextInput,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";

export default function PicsWord() {
  const router = useRouter();
  const { handleOrganellesPress5 } = useHandleClicks();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedOption2, setSelectedOption2] = useState<string | null>(null);

  const handleNext = async () => {
    if (selectedOption) {
      try {
        await AsyncStorage.setItem("selectedQuantity9", selectedOption);
        await AsyncStorage.setItem("selectedQuantity10", selectedOption2!);

        handleOrganellesPress5();
      } catch (error) {
        console.error("Error saving selection:", error);
        Alert.alert("Error", "Failed to save selection.");
      }
    } else {
      Alert.alert("Answer the following before proceeding.");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>The Organelles</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Hint 9 */}
        <View style={styles.card}>
          <View style={styles.hintBox}>
            <Text style={styles.hintText}>OLEVACU</Text>
            <Text style={styles.hintSubText}>Stores water, nutrients, and waste.</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your answer"
            placeholderTextColor="#555"
            onChangeText={(text) => setSelectedOption(text)}
          />
        </View>

        {/* Hint 10 */}
        <View style={styles.card}>
          <View style={styles.hintBox}>
            <Text style={styles.hintText}>PLASMICDONE MULUCITER </Text>
            <Text style={styles.hintSubText}>Protein synthesis and modification (rough ER), lipid synthesis (smooth ER).</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your answer"
            placeholderTextColor="#555"
            onChangeText={(text) => setSelectedOption2(text)}
          />
        </View>

        {/* Navigation Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.navButton} onPress={() => router.push("/biology")}>
            <Text style={styles.navButtonText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={handleNext}>
            <Text style={styles.navButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFDDAB", // Main background
  },
  header: {
    backgroundColor: "#945034",
    paddingVertical: 20,
    alignItems: "center",
    shadowColor: "#000",
    elevation: 5,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#FFF5DE",
    borderRadius: 20,
    padding: 20,
    width: "100%",
    marginBottom: 20,
    shadowColor: "#000",
    elevation: 4,
  },
  hintBox: {
    backgroundColor: "#FF9A9A",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  hintText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  hintSubText: {
    fontSize: 14,
    color: "#222",
  },
  textInput: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    height: 45,
    paddingHorizontal: 15,
    textAlign: "center",
    fontSize: 16,
    color: "#000",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    width: "100%",
    paddingHorizontal: 10,
  },
  navButton: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
    elevation: 3,
  },
  navButtonText: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 16,
  },
});