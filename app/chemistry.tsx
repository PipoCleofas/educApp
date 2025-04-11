import React, { useRef, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ChemistryScreen = () => {
  const router = useRouter();
  const { ChemQuizPress, handleMatterMatchPress1 } = useHandleClicks();
  const [sciQuizScore, setSciQuizScore] = useState<number>(0);
  const [matterMatchScore, setMatterMatchScore] = useState<number>(0);
  const [totalScore, setTotalScore] = useState<number>(0);

  // Create animated values for floating effect
  const matchMatterAnim = useRef(new Animated.Value(0)).current;
  const sciQuizAnim = useRef(new Animated.Value(0)).current;
  const elementsAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Function to load scores from AsyncStorage
    const getItem = async () => {
      try {
        const storedSciQuizScore = await AsyncStorage.getItem("chemQuizScore");
        const storedMatterMatchScore = await AsyncStorage.getItem("matterMatchScore");

        if (storedSciQuizScore !== null) {
          setSciQuizScore(parseInt(storedSciQuizScore, 10));
        }
        if (storedMatterMatchScore !== null) {
          setMatterMatchScore(parseInt(storedMatterMatchScore, 10));
        }
      } catch (error) {
        console.error("Error loading scores:", error);
      }
    };

    getItem();
  }, []);

  useEffect(() => {
    // Calculate total score whenever individual scores update
    setTotalScore(sciQuizScore + matterMatchScore);
  }, [sciQuizScore, matterMatchScore]);

  // Set up floating animation
  useEffect(() => {
    // Create animations for each button with slight delays
    const createFloatingAnimation = (animValue: any, delay: any) => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(animValue, {
            toValue: -5, // Move up slightly
            duration: 1500,
            delay: delay,
            useNativeDriver: true,
          }),
          Animated.timing(animValue, {
            toValue: 0, // Return to original position
            duration: 1500,
            useNativeDriver: true,
          })
        ])
      );
    };

    // Start animations with staggered delays
    const matchMatterAnimation = createFloatingAnimation(matchMatterAnim, 0);
    const sciQuizAnimation = createFloatingAnimation(sciQuizAnim, 300);
    const elementsAnimation = createFloatingAnimation(elementsAnim, 600);

    matchMatterAnimation.start();
    sciQuizAnimation.start();
    elementsAnimation.start();

    return () => {
      // Clean up animations
      matchMatterAnimation.stop();
      sciQuizAnimation.stop();
      elementsAnimation.stop();
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* Scoreboard */}
      <View style={styles.scoreboard}>
        <View style={styles.scoreItem}>
          <Text style={styles.scoreLabel}>Sci Quiz:</Text>
          <Text style={styles.scoreValue}>{sciQuizScore}</Text>
        </View>
        <View style={styles.scoreItem}>
          <Text style={styles.scoreLabel}>Match Matter:</Text>
          <Text style={styles.scoreValue}>{matterMatchScore}</Text>
        </View>
        <View style={styles.scoreItem}>
          <Text style={styles.scoreLabel}>Total:</Text>
          <Text style={styles.scoreValue}>{totalScore}</Text>
        </View>
      </View>

      {/* Header */}
      <View style={styles.headerdesign}>
        <Text style={styles.title}>Chemistry</Text>
      </View>

      {/* Exit Button */}
      <TouchableOpacity
        style={styles.exitButton}
        onPress={() => router.push("/Choose")}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      {/* Buttons Container */}
      <View style={styles.buttonListContainer}>
        {/* Match Matter Button */}
        <Animated.View style={{
          transform: [{ translateY: matchMatterAnim }],
          marginVertical: 10,
          width: "100%"
        }}>
          <TouchableOpacity
            style={styles.buttonItem}
            onPress={handleMatterMatchPress1}>
            <View style={styles.greenCircle}></View>
            <Text style={styles.buttonText}>Match Matter</Text>
            <Text style={styles.iconText}>🧪</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Sci Quiz Button */}
        <Animated.View style={{
          transform: [{ translateY: sciQuizAnim }],
          marginVertical: 10,
          width: "100%"
        }}>
          <TouchableOpacity
            style={styles.buttonItem}
            onPress={ChemQuizPress}>
            <View style={styles.greenCircle}></View>
            <Text style={styles.buttonText}>Sci Quiz</Text>
            <Text style={styles.iconText}>🔬</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreboard: {
    position: 'absolute',
    top: 80,
    backgroundColor: 'rgba(226, 186, 203, 0.7)',
    borderRadius: 15,
    padding: 15,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  scoreItem: {
    alignItems: 'center',
  },
  scoreLabel: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  scoreValue: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#C599B6",
    alignItems: "center",
    justifyContent: "center",
  },
  exitButton: {
    position: 'absolute',
    top: 10,
    left: 25,
    paddingVertical: 8,
    paddingHorizontal: 8,
    height: 40,
    width: 50,
    backgroundColor: '#E6B2BA',
    borderRadius: 8,
  },
  exitText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
  headerdesign: {
    position: 'absolute',
    top: 5,
    backgroundColor: '#E6B2BA',
    paddingHorizontal: 130,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{ scale: 1.2 }],
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  buttonListContainer: {
    width: '85%',
    alignItems: 'center',
    backgroundColor: 'rgba(226, 186, 203, 0.7)',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  buttonItem: {
    backgroundColor: "#E6B2BA",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  greenCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#90EE90',
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  iconText: {
    fontSize: 20,
    marginRight: 5,
  }
});

export default ChemistryScreen;