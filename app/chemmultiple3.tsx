import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import useHandleClicks from '@/hooks/useHandleClicks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";

const Question3: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
      const router = useRouter();

  const {ChemQuizPress3} = useHandleClicks();

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
      if (selectedOption !== "A. All samples must be tested exactly at the same time.") Alert.alert("The correct answer is A.")
      await AsyncStorage.setItem('selectedOption3', selectedOption);
      ChemQuizPress3()
      console.log('Saved option:', selectedOption);
      // Navigate to the next screen (if needed)
    } catch (error) {
      console.error('Failed to save selected option:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerdesign}><Text style={styles.title}>Sci Quiz</Text></View>
        <TouchableOpacity style={styles.exitButton1} onPress={() => router.push("/chemistry")}>
                        <Text style={styles.exitText1}>Back</Text>
                </TouchableOpacity>
      <View style={styles.quizBox}>
        <View style={styles.questionBox}>
          <Text style={styles.questionText}>3. Imagine that you performed an experiment in which you dissolved different samples of sugar (sugar cubes, extra fine sugar and regular table sugar) into water samples to compare how long they took to dissolve. What factor would be at least important to the design of this experiment?</Text>
        </View>
        <View style={styles.optionsContainer}>
          {['A. All samples must be tested exactly at the same time.', 'B. The sugar samples must contain sugar and water only.', 'C. All water samples must have the same temperatures.', 'D. The same amount of sugar must be placed in each sample.'].map((option) => (
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
         
          <TouchableOpacity style={styles.exitButton2} onPress={() => router.back()}>
            <Text style={styles.exitButtonText2}>Back</Text>
          </TouchableOpacity>
                    
          <TouchableOpacity style={styles.navButton} onPress={handleNextPress}>
            <Text style={styles.navButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  
  exitButton1: {
    position: 'absolute' as const,
    top: 20,
    left: 25,
    paddingVertical: 8,
    paddingHorizontal: 12,
    height: 40,
    width: 60,
    backgroundColor: '#E6B2BA',
    borderRadius: 8, 
  },

  exitText1: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500' as const,
  },

  headerdesign:{
    position: 'absolute' as const,
    top: 5,
    backgroundColor: '#E6B2BA',
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
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center' as const,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAD0C4',
    paddingHorizontal: 16, 
  },
  
  quizBox: {
    backgroundColor: '#E6B2BA',
    padding: 24,
    top: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    width: '100%',
    maxWidth: 400,
    height: '100%',
    maxHeight: 600
  },

  questionBox: {
    backgroundColor: '#C599B6',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    width: '100%',
  },
  questionText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'left' as const,
  },
  questionNumber: {
    fontWeight: 'bold' as const,
  },

  optionsContainer: {
    width: '100%',
    marginBottom: 8,
  },
  optionButton: {
    backgroundColor: '#f8f9fa',
    padding: 14,
    marginVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    width: '100%',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'left' as const,
    paddingLeft: 8,
  },
  
  selectedOption: {
    backgroundColor: '#D6A2E8',
    borderColor: '#D6A2E8',
  },

  buttonContainer: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 8,
  },

  exitButton2: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center' as const,
    justifyContent: 'center',
    minWidth: 150,
    minHeight: 70,
  },

  exitButtonText2: {
    color: 'black',
    fontWeight: 'bold' as const,
    fontSize: 16,
  },

  navButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center' as const,
    justifyContent: 'center',
    minWidth: 150,
    minHeight: 70,
  },
  
  navButtonText: {
    color: 'black',
    fontWeight: 'bold' as const,
    fontSize: 16,
  },
});

export default Question3;