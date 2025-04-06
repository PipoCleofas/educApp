import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import useScore from "@/hooks/useScore";
import useHandleClicks from "@/hooks/useHandleClicks";
import { useRouter } from "expo-router";
const { width } = Dimensions.get("window"); // Get device width
import useAchievements from "@/hooks/useAchievements";

const wordList: string[] = ["FOCUS", "EPICENTER", "MAGNITUDE", "INTENSITY", "WAVE"];

const puzzleGrid: string[][] = [
  ["O", "F", "W", "A", "V", "E", "A", "M", "I"],
  ["C", "A", "S", "E", "S", "O", "R", "A", "N"],
  ["E", "F", "U", "D", "G", "E", "T", "G", "T"],
  ["S", "U", "C", "O", "F", "R", "S", "N", "U"],
  ["N", "E", "E", "D", "S", "I", "E", "I", "R"],
  ["I", "N", "T", "E", "N", "S", "I", "T", "Y"],
  ["C", "U", "T", "N", "E", "S", "T", "U", "A"],
  ["E", "A", "G", "L", "E", "D", "S", "D", "N"],
  ["E", "P", "I", "C", "E", "N", "T", "E", "R"],
];

interface Cell {
  row: number;
  col: number;
}

const WordSearchPuzzle: React.FC = () => {
  const { addAchievement } = useAchievements();
  const [selectedCells, setSelectedCells] = useState<Cell[]>([]);
  const [foundCells, setFoundCells] = useState<Cell[]>([]);
  const { wordPuzzleScore, setWordPuzzleScore } = useScore();
  const { handleGoBackPress } = useHandleClicks();
  const router = useRouter();

  function handleSubmitPress() {
    if (wordPuzzleScore === 0) return;
    addAchievement("Eagle Eye");
    handleGoBackPress();
  }

  useEffect(() => {
    if (selectedCells.length === 0) return;

    const timeout = setTimeout(() => {
      setSelectedCells([]); // Reset selection after 2 seconds of inactivity
    }, 2000);

    return () => clearTimeout(timeout); // Clear timeout if selection changes
  }, [selectedCells]);

  const handlePress = (row: number, col: number) => {
    const newSelection = [...selectedCells, { row, col }];
    setSelectedCells(newSelection);

    // Form the selected word
    const selectedWord = newSelection.map(({ row, col }) => puzzleGrid[row][col]).join("");

    if (wordList.includes(selectedWord)) {
      setFoundCells([...foundCells, ...newSelection]); // Add exact word cells to foundCells
      setSelectedCells([]); // Reset selection

      // Increment score by 2
      setWordPuzzleScore((prevScore) => (prevScore !== null ? prevScore + 2 : 2));
    }
  };

  const isCellHighlighted = (row: number, col: number): boolean =>
    foundCells.some((cell) => cell.row === row && cell.col === col);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.instructionText}>
        Tap the letters to find the words. <Text style={{ fontWeight: "bold" }}>Wait 2 secs</Text> for selected letters to reset.
      </Text>

      <Text style={styles.scoreText}>Score: {wordPuzzleScore}</Text>
      <View style={styles.gridContainer}>
        {puzzleGrid.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((letter, colIndex) => (
              <TouchableOpacity
                key={colIndex}
                style={[styles.cell, isCellHighlighted(rowIndex, colIndex) && styles.selectedCell]}
                onPress={() => handlePress(rowIndex, colIndex)}
              >
                <Text style={styles.letter}>{letter}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmitPress}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes full screen height
    width: "100%", // Takes full screen width
    alignItems: "center",
    backgroundColor: "#4a3333", // Deep reddish brown background
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  scoreText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#f2feca", // Light cream text color
    marginBottom: 15,
  },
  gridContainer: {
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: 35,
    height: 40,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
    backgroundColor: "#98d083", // Soft green background for the cells
    borderRadius: 5,
  },
  letter: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff", // White text color for the letters
  },
  selectedCell: {
    backgroundColor: "#bcfcc9", // Light minty green background for selected cells
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: "#98d083", // Soft green background for the submit button
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3, // Android shadow
  },
  exitButton: {
    position: "absolute",
    top: "5%",
    left: "5%",
    backgroundColor: "#f2feca", // Light cream for exit button
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  exitText: {
    color: "#4a3333", // Deep reddish brown text color for the exit button
    fontSize: 14,
  },
  instructionText: {
    fontSize: 16,
    color: "#f2feca", // Light cream for instructions text
    textAlign: "center",
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  submitText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff", // White text color for submit button text
  },
});

export default WordSearchPuzzle;
