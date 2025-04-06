import useHandleClicks from "@/hooks/useHandleClicks";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import useAchievements from "@/hooks/useAchievements";

export default function QuakePrepare() {
  const { handleGoBackPress } = useHandleClicks();
  const { addAchievement } = useAchievements();
  const router = useRouter();

  function handleSubmit() {
    addAchievement("Smart One");
    handleGoBackPress();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      <View style={styles.centeredContent}>
        <Text style={styles.questionText}>
          3. What is the importance of getting ready in a disaster?
        </Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={4}
          placeholder="Type your answer here..."
          placeholderTextColor="#999"
          textAlignVertical="top"
        />
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={handleSubmit}>
        <Text style={styles.nextButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A3333", // Dark brown background
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  exitButton: {
    position: "absolute",
    top: 20,
    left: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#fff", // White background for the exit button
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#98D083", // Green border for the exit button
  },
  exitText: {
    color: "#98D083", // Green text color for the exit button
    fontSize: 14,
  },
  centeredContent: {
    width: "90%",
    alignItems: "center",
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F2FECA", // Light yellow color for the question text
    textAlign: "center",
    marginBottom: 10,
    marginTop: 150,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#98D083", // Green border color for input
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: "#333", // Dark text color for input
    backgroundColor: "#fff", // White background for the input field
    minHeight: 100,
  },
  nextButton: {
    width: "30%",
    backgroundColor: "#fff", // White background for the next button
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 50,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#98D083", // Green border for the button
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#98D083", // Green text color for the next button
  },
});
