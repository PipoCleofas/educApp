import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import useHandleClicks from "@/hooks/useHandleClicks";

const PuzzleFifth = () => {
  const router = useRouter();
  const {handleGeoSubmitPuzzlePress, setGeoPuzzle5} = useHandleClicks();
  
  return (
    <View style={styles.container}>
      {/* Exit Button */}
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Earth Science</Text>



      {/* Question Section */}
        <View style={styles.questionContainer}>
        
        <Text style={styles.scrambledText}>S E I I C M S A I I C T T V Y</Text>
        <Text style={styles.questionText}>
            Also referred to as seismicity,{"\n"}
            is the occurrence and{"\n"}
            distribution of earthquakes in{"\n"}
            a region.
        </Text>

        <TextInput 
            style={styles.input} 
            placeholder="Enter your answer..."
            placeholderTextColor="#aaa"
            onChangeText={(text) => setGeoPuzzle5(text)}

        />

        <TouchableOpacity style={styles.nextButton} onPress={handleGeoSubmitPuzzlePress}>
            <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
        </View>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F4F4F",
    alignItems: "center",
    justifyContent: "center",
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
  questionContainer: {
    width: "90%",
    padding: 20,
    backgroundColor: "transparent", // Make background transparent
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 20, // Adds spacing from images above
  },
  
    
    questionText: {
      fontSize: 18,
      color: "black",
      textAlign: "center",
      marginBottom: 15,
      lineHeight: 24, // Improves readability
    },
  exitText: {
    color: "#fff",
    fontSize: 14,
  },
 
  
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    marginBottom: 15,
    textAlign: "center",
  },
  
  nextButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    position: "absolute",
    top: "10%",
  },
  image: {
    width: 100,
    height: 100,
    position: "absolute",
  },
  topLeft: {
    top: "18%",
    left: "-1%",
    transform: [{ rotate: "-10deg" }],
  },
  topRight: {
    top: "18%",
    right: "-3%",
    transform: [{ rotate: "10deg" }],
  },
  middleLeft: {
    top: "40%",
    left: "-1%",
    transform: [{ rotate: "-8deg" }],
  },
  scrambledText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007BFF", // Highlighted color
    textAlign: "center",
    marginBottom: 10,
    letterSpacing: 2, // Adds spacing for better readability
},

  middleRight: {
    top: "40%",
    right: "-1%",
    transform: [{ rotate: "8deg" }],
  },
  bottomLeft: {
    bottom: "8%",
    left: "-3%",
    transform: [{ rotate: "-12deg" }],
  },
  bottomRight: {
    bottom: "8%",
    right: "-1%",
    transform: [{ rotate: "12deg" }],
  },
  buttonContainer: {
    width: "80%",
    position: "absolute",
    bottom: "20%",
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 10, // Adds spacing between buttons
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default PuzzleFifth;
