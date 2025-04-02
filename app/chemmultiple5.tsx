import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import useHandleClicks from '@/hooks/useHandleClicks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";

const Question5: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
      const router = useRouter();

  const {ChemQuizPress5} = useHandleClicks();

  // Function to handle option selection (only updates state)
  const handleChange = (option: string) => {
    setSelectedOption(option);
  };

  // Function to handle "Next" button press (saves to AsyncStorage)
  const handleNextPress = async () => {
    if (!selectedOption) {
      return;
    }

    try {
      await AsyncStorage.setItem('selectedOption5', selectedOption);
      ChemQuizPress5()
      console.log('Saved option:', selectedOption);
      // Navigate to the next screen (if needed)
    } catch (error) {
      console.error('Failed to save selected option:', error);
    }
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
                        <Text style={styles.exitText}>Back</Text>
                </TouchableOpacity>
      <View style={styles.quizBox}>
        <Text style={styles.title}>CHEMISTRY QUIZ</Text>
        <View style={styles.questionBox}>
          <Text style={styles.questionText}>Which of the following factors does NOT affect the rate of dissolution?</Text>
        </View>
        <View style={styles.optionsContainer}>
          {['A. Temperature', 'B. Surface area', 'C. Stirring', 'D. The shape of the container'].map((option) => (
            <TouchableOpacity
              key={option}
              style={[styles.optionButton, selectedOption === option ? styles.selectedOption : null]}
              onPress={() => handleChange(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.buttonContainer}>
        
          <TouchableOpacity style={styles.navButton} onPress={handleNextPress}>
            <Text style={styles.navButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4F4F4F' },
  quizBox: { backgroundColor: 'white', padding: 20, borderRadius: 20, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 10, width: 320, alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  questionBox: { backgroundColor: '#007BFF', padding: 10, borderRadius: 10, marginBottom: 10 },
  questionText: { color: 'white', textAlign: 'center' },
  optionsContainer: { width: '100%' },
  optionButton: { backgroundColor: 'white', padding: 10, marginVertical: 5, borderRadius: 10, borderWidth: 1, borderColor: '#ccc', alignItems: 'center' },
  selectedOption: { backgroundColor: '#D6A2E8' },
  optionText: { fontSize: 16 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'center', width: '100%', marginTop: 10 },
  navButton: { backgroundColor: '#007BFF', padding: 10, borderRadius: 10, width: 100, alignItems: 'center' },
  navButtonText: { color: 'white', fontWeight: 'bold' }
});

export default Question5;