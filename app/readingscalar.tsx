import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import useHandleClicks from "@/hooks/useHandleClicks";

export default function ReadingScalar() {
    const {handleNextBioPicsPress} = useHandleClicks();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Instructions:</Text>
        <Text style={styles.text}>
          Identify if the given statement is scalar or a vector quantity.
        </Text>

        <Text style={styles.title}>Unlocking of Content Vocabulary</Text>
        <Text style={styles.subtitle}>
          What is the difference between scalar and vector quantities?
        </Text>

        <Text style={styles.title}>Scalar Quantity:</Text>
        <Text style={styles.text}>
          A quantity that is described by magnitude only.
        </Text>
        <Text style={styles.text}>
          Magnitude: Numerical value and a unit (e.g., 30 meters, where 30 is the number and meters is the unit).
        </Text>

        <Text style={styles.subtitle}>Examples of Scalar Quantities:</Text>
        <Text style={styles.text}>- 10 km (distance)</Text>
        <Text style={styles.text}>- 50 kg (mass)</Text>
        <Text style={styles.text}>- 27°C (temperature)</Text>
        <Text style={styles.text}>- 80 mL (volume)</Text>
        <Text style={styles.text}>- 30 mins (time)</Text>

        <Text style={styles.title}>Vector Quantity:</Text>
        <Text style={styles.text}>
          A quantity that is completely described by magnitude and direction.
        </Text>

        <Text style={styles.subtitle}>Examples of Vector Quantities:</Text>
        <Text style={styles.text}>
          - 80 km/hr East (velocity of a vehicle with magnitude of 80 km/hr and direction East)
        </Text>
        <Text style={styles.text}>
          - 20 N upward (force of 20 N directed upward)
        </Text>
        <Text style={styles.text}>
          - 2 m/s² to the right (acceleration of a moving object with magnitude 2 m/s² directed to the right)
        </Text>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={handleNextBioPicsPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#4F4F4F",
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 5,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
