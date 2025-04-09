import React, { useRef, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { useRouter } from "expo-router";
import useHandleClicks from "@/hooks/useHandleClicks";

const PhysicsScreen = () => {
  const router = useRouter();
  const { handleBioPicsPress, handleTypesOfForcwePress, handle4Pics1WordPress } = useHandleClicks();
  
  // Create animated values for floating effect
  const pics4Anim = useRef(new Animated.Value(0)).current;
  const bioLinkAnim = useRef(new Animated.Value(0)).current;
  const typesOfForceAnim = useRef(new Animated.Value(0)).current;

  // Set up floating animation
  useEffect(() => {
    // Create animations for each button with slight delays
    const createFloatingAnimation = (animValue:any, delay:any) => {
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
      {/* Title */}
      <View style={styles.headerdesign}>
        <Text style={styles.title}>Physics</Text>
      </View>
      
      {/* Exit Button */}
      <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
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

      {/* Physics-themed images */}
      <Image source={require("../utils/pictures/14.png")} style={[styles.image, styles.topLeft]} />
      <Image source={require("../utils/pictures/4.png")} style={[styles.image, styles.topRight]} />
      <Image source={require("../utils/pictures/15.png")} style={[styles.image, styles.middleLeft]} />
      <Image source={require("../utils/pictures/16.png")} style={[styles.image, styles.middleRight]} />
      <Image source={require("../utils/pictures/13.png")} style={[styles.image, styles.bottomLeft]} />
    </View>
  );
};

const styles = StyleSheet.create({
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