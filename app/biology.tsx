import React, { useRef, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from "react-native";
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
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.headerdesign}>
        <Text style={styles.title}>Biology</Text>
      </View>
      
      {/* Exit Button */}
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
        <Text style={styles.exitText}>Back</Text>
      </TouchableOpacity>

      {/* Content Container */}
      <View style={styles.contentContainer}>
        {/* BioQuiz Button */}
        <Animated.View style={{
          transform: [{ translateY: bioQuizAnim }],
          marginVertical: 10,
          width: "100%"
        }}>
          <TouchableOpacity 
            style={styles.menuButton} 
            onPress={handleBioQuizPress}
          >
            <View style={styles.whiteCircle}></View>
            <Text style={styles.buttonText}>BioQuiz</Text>
            <Text style={styles.iconText}>🌱</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* The Organelles Button */}
        <Animated.View style={{
          transform: [{ translateY: organellesAnim }],
          marginVertical: 10,
          width: "100%"
        }}>
          <TouchableOpacity 
            style={styles.menuButton} 
            onPress={handleOrganellesPress}
          >
            <View style={styles.whiteCircle}></View>
            <Text style={styles.buttonText}>The Organelles</Text>
            <Text style={styles.iconText}>🧫</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>

      {/* Biology-themed images */}
      <Image source={require("../utils/pictures/17.png")} style={[styles.image, styles.topLeft]} />
      <Image source={require("../utils/pictures/8.png")} style={[styles.image, styles.topRight]} />
      <Image source={require("../utils/pictures/7.png")} style={[styles.image, styles.middleRight]} />
      <Image source={require("../utils/pictures/9.png")} style={[styles.image, styles.bottomLeft]} />
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "#FFDDAB",
    alignItems: "center",
    justifyContent: "center",
  },
  exitButton: {
    position: 'absolute',
    top: 20,
    left: 25,
    paddingVertical: 8,
    paddingHorizontal: 7,
    height: 40,
    width: 50,
    backgroundColor: '#945034',
    borderRadius: 8, 
  },
  exitText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
  headerdesign:{
    position: 'absolute',
    top: 5,
    backgroundColor: '#945034',
    paddingHorizontal: 130,
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
    backgroundColor: 'rgba(255, 228, 196, 0.6)',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  menuButton: {
    backgroundColor: "#5F8B4C",
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
  whiteCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
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
});

export default BiologyScreen;