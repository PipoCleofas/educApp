import React, { useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated, SafeAreaView, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";

const BiologyScreen = () => {
  const router = useRouter();
  const { handleBioQuizPress, handleOrganellesPress } = useHandleClicks();
  
  const bioQuizAnim = useRef(new Animated.Value(0)).current;
  const organellesAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const createFloatingAnimation = (animValue:any, delay:any) => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(animValue, {
            toValue: -5,
            duration: 1500,
            delay: delay,
            useNativeDriver: true,
          }),
          Animated.timing(animValue, {
            toValue: 0, 
            duration: 1500,
            useNativeDriver: true,
          })
        ])
      );
    };

    // Start animations with staggered delays
    const bioQuizAnimation = createFloatingAnimation(bioQuizAnim, 0);
    const organellesAnimation = createFloatingAnimation(organellesAnim, 300);

    bioQuizAnimation.start();
    organellesAnimation.start();

    return () => {
      // Clean up animations
      bioQuizAnimation.stop();
      organellesAnimation.stop();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#8B4513" barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton} onPress={() => router.back()}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Biology</Text>
      </View>

      {/* Main Content Area */}
      <View style={styles.contentContainer}>
        {/* BioQuiz Button */}
        <Animated.View style={{
          transform: [{ translateY: bioQuizAnim }],
          marginVertical: 10,
          width: "100%"
        }}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={handleBioQuizPress}
          >
            <View style={styles.buttonIndicator}></View>
            <Text style={styles.buttonText}>BioQuiz</Text>
            <View style={styles.iconContainer}>
              <Text style={styles.buttonIcon}>🌱</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>

        {/* The Organelles Button */}
        <Animated.View style={{
          transform: [{ translateY: organellesAnim }],
          marginVertical: 10,
          width: "100%"
        }}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={handleOrganellesPress}
          >
            <View style={styles.buttonIndicator}></View>
            <Text style={styles.buttonText}>The Organelles</Text>
            <View style={styles.iconContainer}>
              <Text style={styles.buttonIcon}>🧫</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFDAB5", // Peachy background
  },
  header: {
    backgroundColor: "#8B4513", // Brown header
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  menuButton: {
    marginRight: 15,
  },
  menuIcon: {
    fontSize: 22,
    color: "#FFFFFF",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#FFFFFF",
    textAlign: "center",
  },
  contentContainer: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFE4C4", // Lighter peach for the content area
    margin: 20,
    borderRadius: 20,
  },
  button: {
    backgroundColor: "#5F8B4C", // Green button color
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  buttonIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF", // White circle
    marginRight: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
  },
  iconContainer: {
    marginLeft: 10,
  },
  buttonIcon: {
    fontSize: 22,
  },
});

export default BiologyScreen;