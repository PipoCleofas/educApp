import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import useScore from "@/hooks/useScore";
import useHandleClicks from "@/hooks/useHandleClicks";
import { useRouter } from "expo-router";
const { width } = Dimensions.get("window");
import useAchievements from "@/hooks/useTrophy";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

const GeoPuzzleGrid = () => {
    const { addAchievement } = useAchievements();
    const [selectedCells, setSelectedCells] = useState<Cell[]>([]);
    const [foundCells, setFoundCells] = useState<Cell[]>([]);
    const { setWordPuzzleScore } = useScore();
    const { handleGoBackPress } = useHandleClicks();
    const router = useRouter();
    const [currentScore, setCurrentScore] = useState<number>(0);

    const handleSubmitPress = async () => {
        if (currentScore > 0) {
            addAchievement("Eagle Eye");
        }
        await saveScore();
        handleGoBackPress();
    };

    useEffect(() => {
        if (selectedCells.length === 0) return;
        const timeout = setTimeout(() => setSelectedCells([]), 2000);
        return () => clearTimeout(timeout);
    }, [selectedCells]);

    const handlePress = (row: number, col: number) => {
        const newSelection = [...selectedCells, { row, col }];
        setSelectedCells(newSelection);
        const selectedWord = newSelection.map(({ row, col }) => puzzleGrid[row][col]).join("");

        if (wordList.includes(selectedWord)) {
            setFoundCells([...foundCells, ...newSelection]);
            setSelectedCells([]);
            setCurrentScore(prev => prev + 2);
        }
    };

    const isCellHighlighted = (row: number, col: number): boolean =>
        foundCells.some((cell) => cell.row === row && cell.col === col);

    const saveScore = async () => {
        try {
            setWordPuzzleScore(currentScore);
            await AsyncStorage.setItem("wordpuzzle", currentScore.toString());
            console.log("Word Puzzle score saved:", currentScore);
        } catch (error) {
            console.error("Error saving score:", error);
        }
    };

    useEffect(() => {
        saveScore();
    }, [currentScore]);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.exitButton} onPress={() => router.push("/earthsci")}>
                <Text style={styles.exitText}>Back</Text>
            </TouchableOpacity>

            <Text style={styles.instructionText}>
                Tap the letters to find the words. <Text style={{ fontWeight: "bold" }}>Wait 2 secs</Text> for selected letters to reset.
            </Text>

            <Text style={styles.scoreText}>Score: {currentScore}</Text>
            
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

            <TouchableOpacity style={styles.submitButton} onPress={() => router.push("/earthsci")}>
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        backgroundColor: "#4a3333",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    scoreText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#f2feca",
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
        backgroundColor: "#98d083",
        borderRadius: 5,
    },
    letter: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    selectedCell: {
        backgroundColor: "#bcfcc9",
    },
    submitButton: {
        marginTop: 20,
        backgroundColor: "#98d083",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
    },
    exitButton: {
        position: "absolute",
        top: "5%",
        left: "5%",
        backgroundColor: "#f2feca",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    exitText: {
        color: "#4a3333",
        fontSize: 14,
    },
    instructionText: {
        fontSize: 16,
        color: "#f2feca",
        textAlign: "center",
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    submitText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
});

export default GeoPuzzleGrid;