import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import useHandleClicks from "../hooks/useHandleClicks";

const Choose = () => {
  const { handleChemistryPress, handleBiologyPress, handlePhysicsPress, handleEarthSciPress } = useHandleClicks();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Gradient Background */}
      <LinearGradient
        colors={['#a9c1e8', '#7995d1', '#3964ad']}
        style={styles.background}
        locations={[0, 0.5, 1]}
      />

      {/* Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>Sci Nay</Text>
          <Text style={styles.subtitle}>Good morning</Text>
        </View>
        <Image 
          source={require("../utils/pictures/2.png")} 
          style={styles.profileImage}
        />
      </View>

      {/* Subject Buttons */}
      <View style={styles.buttonContainer}>
        {/* Chemistry Button */}
        <TouchableOpacity 
          style={[styles.subjectButton, styles.chemistryButton]}
          onPress={handleChemistryPress}
        >
          <View style={[styles.radioButton, styles.chemistryRadio]} />
          <Text style={styles.buttonText}>Chemistry</Text>
          <Image 
            source={require("../utils/pictures/3.png")} 
            style={styles.buttonIcon}
          />
        </TouchableOpacity>

        {/* Biology Button */}
        <TouchableOpacity 
          style={[styles.subjectButton, styles.biologyButton]}
          onPress={handleBiologyPress}
        >
          <View style={[styles.radioButton, styles.biologyRadio]} />
          <Text style={styles.buttonText}>Biology</Text>
          <Image 
            source={require("../utils/pictures/5.png")} 
            style={styles.buttonIcon}
          />
        </TouchableOpacity>

        {/* Physics Button */}
        <TouchableOpacity 
          style={[styles.subjectButton, styles.physicsButton]}onPress={handlePhysicsPress}>
          <View style={[styles.radioButton, styles.physicsRadio]} />
          <Text style={styles.buttonText}>Physics</Text>
          <Image 
            source={require("../utils/pictures/1.png")} 
            style={styles.buttonIcon}
          />
        </TouchableOpacity>

        {/* Earth and Science Button */}
        <TouchableOpacity 
          style={[styles.subjectButton, styles.earthButton]}onPress={handleEarthSciPress}>
          <View style={[styles.radioButton, styles.earthRadio]} />
          <Text style={styles.buttonText}>Earth and Science</Text>
          <Image 
            source={require("../utils/pictures/4.png")} 
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 40,
  },
  titleSection: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  subjectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    padding: 15,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 15,
  },
  buttonText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
  buttonIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  // Chemistry specific styles
  chemistryButton: {
    backgroundColor: '#E27396', // Pink
  },
  chemistryRadio: {
    backgroundColor: '#FFB6C1',
  },
  // Biology specific styles
  biologyButton: {
    backgroundColor: '#A0522D', // Brown
  },
  biologyRadio: {
    backgroundColor: '#FFDAB9',
  },
  // Physics specific styles
  physicsButton: {
    backgroundColor: '#4CAF50', // Green
  },
  physicsRadio: {
    backgroundColor: '#8FBC8F',
  },
  // Earth and Science specific styles
  earthButton: {
    backgroundColor: '#536878', // Slate blue
  },
  earthRadio: {
    backgroundColor: '#A9A9A9',
  },
});

export default Choose;