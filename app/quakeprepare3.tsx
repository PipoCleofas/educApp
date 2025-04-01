import useHandleClicks from "@/hooks/useHandleClicks";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import useAchievements from "@/hooks/useAchievements";

export default function QuakePrepare() {
  const { handleGoBackPress } = useHandleClicks();
  const { addAchievement } = useAchievements();

  const router = useRouter();
 

  function handleSubmit(){
    addAchievement("Smart One")
    handleGoBackPress()
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
    backgroundColor: "#4F4F4F",
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
    backgroundColor: "#000",
    borderRadius: 6,
  },
  exitText: {
    color: "#fff",
    fontSize: 14,
  },
  centeredContent: {
    width: "90%",
    alignItems: "center",
  },
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 150
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#f9f9f9",
    minHeight: 100,
  },
  nextButton: {
    width: "30%",
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 50,
    alignItems: "center",
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
