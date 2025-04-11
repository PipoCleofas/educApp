import React, { useRef, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PhysicsScreen = () => {
  const router = useRouter();
  const { handleBioPicsPress, handleTypesOfForcwePress, handle4Pics1WordPress } = useHandleClicks();
  const [picsWordScore, setPicsWordScore] = useState<number>(0);
  const [scalarScore, setScalarScore] = useState<number>(0); // Assuming "Bio - Link" is the scalar/vector quiz
  const [contactForceScore, setContactForceScore] = useState<number>(0); // Assuming "Types of Force" is about contact force
  const [totalScore, setTotalScore] = useState<number>(0);

  const pics4Anim = useRef(new Animated.Value(0)).current;
  const bioLinkAnim = useRef(new Animated.Value(0)).current;
  const typesOfForceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Function to load scores from AsyncStorage
    const loadScores = async () => {
      try {
        const storedPicsWordScore = await AsyncStorage.getItem("picsWordScore");
        const storedScalarScore = await AsyncStorage.getItem("scalarScore");
        const storedContactForceScore = await AsyncStorage.getItem("contactForceScore");

        if (storedPicsWordScore !== null) {
          setPicsWordScore(parseInt(storedPicsWordScore, 10));
        }
        if (storedScalarScore !== null) {
          setScalarScore(parseInt(storedScalarScore, 10));
        }
        if (storedContactForceScore !== null) {
          setContactForceScore(parseInt(storedContactForceScore, 10));
        }
      } catch (error) {
        console.error("Error loading physics scores:", error);
      }
    };

    loadScores();
  }, []);

  useEffect(() => {
    // Calculate total score whenever individual scores update
    setTotalScore(picsWordScore + scalarScore + contactForceScore);
  }, [picsWordScore, scalarScore, contactForceScore]);

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
    const pics4Animation = createFloatingAnimation(pics4Anim, 0);
    const bioLinkAnimation = createFloatingAnimation(bioLinkAnim, 300);
    const typesOfForceAnimation = createFloatingAnimation(typesOfForceAnim, 600);

    pics4Animation.start();
    bioLinkAnimation.start();
    typesOfForceAnimation.start();

    return () => {
      // Clean up animations
      pics4Animation.stop();
      bioLinkAnimation.stop();
      typesOfForceAnimation.stop();
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* Scoreboard */}
      <View style={styles.scoreboard}>
        <View style={styles.scoreItem}>
          <Text style={styles.scoreLabel}>4 Pics 1 Word:</Text>
          <Text style={styles.scoreValue}>{picsWordScore}</Text>
        </View>
        <View style={styles.scoreItem}>
          <Text style={styles.scoreLabel}>Bio - Link:</Text>
          <Text style={styles.scoreValue}>{scalarScore}</Text>
        </View>
        <View style={styles.scoreItem}>
          <Text style={styles.scoreLabel}>Types of Force:</Text>
          <Text style={styles.scoreValue}>{contactForceScore}</Text>
        </View>
        <View style={styles.scoreItem}>
          <Text style={styles.scoreLabel}>Total:</Text>
          <Text style={styles.scoreValue}>{totalScore}</Text>
        </View>
      </View>

      {/* Title */}
      <View style={styles.headerdesign}>
        <Text style={styles.title}>Physics</Text>
      </View>

      {/* Exit Button */}
      <TouchableOpacity style={styles.exitButton} onPress={() => router.push("/Choose")}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      {/* Content Container */}
      <View style={styles.contentContainer}>
        {/* 4 Pics 1 Word Button */}
        <Animated.View style={{
          transform: [{ translateY: pics4Anim }],
          marginVertical: 10,
          width: "100%"
        }}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={handle4Pics1WordPress}
          >
            <View style={styles.peachCircle}></View>
            <Text style={styles.buttonText}>4 Pics 1 Word</Text>
            <Text style={styles.iconText}>🎯</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Bio-Link Button */}
        <Animated.View style={{
          transform: [{ translateY: bioLinkAnim }],
          marginVertical: 10,
          width: "100%"
        }}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={handleBioPicsPress}
          >
            <View style={styles.peachCircle}></View>
            <Text style={styles.buttonText}>Bio - Link</Text>
            <Text style={styles.iconText}>👨‍🔬</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Types of Force Button */}
        <Animated.View style={{
          transform: [{ translateY: typesOfForceAnim }],
          marginVertical: 10,
          width: "100%"
        }}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={handleTypesOfForcwePress}
          >
            <View style={styles.peachCircle}></View>
            <Text style={styles.buttonText}>Types of Force</Text>
            <Text style={styles.iconText}>⚓</Text>
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
      backgroundColor: 'rgba(32, 87, 129, 0.8)', // Slightly less opaque main background
      borderRadius: 15,
      padding: 15,
      height: 200,
      width: '85%',
      marginBottom: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3,
  },
  scoreItem: {
      flexDirection: 'row',
      justifyContent: 'space-between', // Align label to left, value to right
      alignItems: 'center', // Vertically center label and value
      width: '95%',
      height: 35,
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: 'rgba(79, 149, 157, 0.7)', // Lighter background for items
      borderRadius: 10,
      marginBottom: 8, // Add some spacing between items
  },
  scoreLabel: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
  },
  scoreValue: {
      color: '#FFCCAA', // A contrasting color for the value
      fontSize: 16,
      fontWeight: 'bold',
  },
  container: {
      flex: 1,
      backgroundColor: "#98D2C0",
      alignItems: "center",
      justifyContent: "center",
  },
  exitButton: {
      position: 'absolute',
      top: 20,
      left: 25,
      paddingVertical: 8,
      paddingHorizontal: 8,
      height: 40,
      width: 50,
      backgroundColor: '#4F959D',
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
      backgroundColor: '#4F959D',
      paddingHorizontal: 140,
      paddingVertical: 10,
      flexDirection: 'row',
      alignItems: 'center',
      transform: [{ scale: 1.2 }],
  },
  title: {
      top: 0,
      fontSize: 22,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10,
      color: 'white',
      textAlign: 'center',
  },
  contentContainer: {
      width: '85%',
      alignItems: 'center',
      backgroundColor: 'rgba(47, 97, 127, 0.7)',
      borderRadius: 20,
      paddingVertical: 20,
      paddingHorizontal: 10,
  },
  menuButton: {
      backgroundColor: "#205781",
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 30,
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3,
  },
  peachCircle: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: '#FFCCAA',
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
  },
  image: {
      width: 100,
      height: 100,
      position: "absolute",
  },
  topLeft: {
      top: "16%",
      left: "-1%",
      transform: [{ rotate: "-10deg" }],
  },
  topRight: {
      top: "16%",
      right: "-1%",
      transform: [{ rotate: "10deg" }],
  },
  middleLeft: {
      top: "60%",
      left: "-1%",
      transform: [{ rotate: "-8deg" }],
  },
  middleRight: {
      top: "60%",
      right: "-2%",
      transform: [{ rotate: "8deg" }],
  },
  bottomLeft: {
      bottom: "5%",
      left: "10%",
      transform: [{ rotate: "-12deg" }],
  },
  bottomRight: {
      bottom: "5%",
      right: "10%",
      transform: [{ rotate: "12deg" }],
  },
});

export default PhysicsScreen;