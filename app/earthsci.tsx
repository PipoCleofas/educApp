import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, SafeAreaView, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EarthScienceScreen = () => {
    const router = useRouter();
    const [refreshKey, setRefreshKey] = useState(0);
    const [wordPuzzleScore, setWordPuzzleScore] = useState(0);
    const [geoLayerScore, setGeoLayerScore] = useState(0);
    const [quakePuzzleScore, setQuakePuzzleScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);

    // Animation refs
    const geopuzzleAnim = useRef(new Animated.Value(0)).current;
    const quakepuzzleAnim = useRef(new Animated.Value(0)).current;
    const geolayerAnim = useRef(new Animated.Value(0)).current;
    const disasterAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const loadScores = async () => {
            try {
                const [wordScore, layerScore, quakeScore] = await Promise.all([
                    AsyncStorage.getItem('wordpuzzle'),
                    AsyncStorage.getItem('scorenigelayer'),
                    AsyncStorage.getItem('layerscore')
                ]);

                console.log('Loaded scores:', {
                    word: wordScore,
                    layer: layerScore,
                    quake: quakeScore
                });

                setWordPuzzleScore(wordScore ? parseInt(wordScore) : 0);
                setGeoLayerScore(layerScore ? parseInt(layerScore) : 0);
                setQuakePuzzleScore(quakeScore ? parseInt(quakeScore) : 0);
            } catch (error) {
                console.error('Error loading scores:', error);
            }
        };
        

        loadScores();
    }, [refreshKey]);

    useEffect(() => {
        setTotalScore(wordPuzzleScore + geoLayerScore + quakePuzzleScore);
    }, [wordPuzzleScore, geoLayerScore, quakePuzzleScore]);
    

    useEffect(() => {
        const createFloatingAnimation = (animValue: Animated.Value, delay: number) => {
            return Animated.loop(
                Animated.sequence([
                    Animated.timing(animValue, {
                        toValue: -5,
                        duration: 1500,
                        delay,
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

        const animations = [
            createFloatingAnimation(geopuzzleAnim, 0),
            createFloatingAnimation(quakepuzzleAnim, 300),
            createFloatingAnimation(geolayerAnim, 600),
            createFloatingAnimation(disasterAnim, 900)
        ];

        animations.forEach(anim => anim.start());
        return () => animations.forEach(anim => anim.stop());
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#8B4513" barStyle="light-content" />

            {/* Scoreboard */}
            <View style={styles.scoreboard}>
                <View style={styles.scoreItem}>
                    <Text style={styles.scoreLabel}>Geo Puzzle:</Text>
                    <Text style={styles.scoreValue}>{wordPuzzleScore}</Text>
                </View>
                <View style={styles.scoreItem}>
                    <Text style={styles.scoreLabel}>Geo Layer:</Text>
                    <Text style={styles.scoreValue}>{geoLayerScore}</Text>
                </View>
                <View style={styles.scoreItem}>
                    <Text style={styles.scoreLabel}>Quake Puzzle:</Text>
                    <Text style={styles.scoreValue}>{quakePuzzleScore}</Text>
                </View>
                <View style={styles.scoreItem}>
                    <Text style={styles.scoreLabel}>Total:</Text>
                    <Text style={styles.scoreValue}>{totalScore}</Text>
                </View>
            </View>

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.push("/Choose")}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Earth and Science</Text>
            </View>

            {/* Main Content */}
            <View style={styles.contentContainer}>
                <Animated.View style={{ transform: [{ translateY: geopuzzleAnim }], marginVertical: 10, width: "100%" }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => router.push('/wordsearchpuzzle')}
                    >
                        <View style={styles.buttonIndicator}></View>
                        <Text style={styles.buttonText}>Geo Puzzle</Text>
                        <View style={styles.iconContainer}>
                            <Text style={styles.buttonIcon}>🧩</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={{ transform: [{ translateY: quakepuzzleAnim }], marginVertical: 10, width: "100%" }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => router.push('/geolayer')}
                    >
                        <View style={styles.buttonIndicator}></View>
                        <Text style={styles.buttonText}>Quake Puzzle</Text>
                        <View style={styles.iconContainer}>
                            <Text style={styles.buttonIcon}>🏠</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={{ transform: [{ translateY: geolayerAnim }], marginVertical: 10, width: "100%" }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => router.push('/puzzlefirst')}
                    >
                        <View style={styles.buttonIndicator}></View>
                        <Text style={styles.buttonText}>Geo Layer</Text>
                        <View style={styles.iconContainer}>
                            <Text style={styles.buttonIcon}>🌍</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={{ transform: [{ translateY: disasterAnim }], marginVertical: 10, width: "100%" }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => router.push('/quakeprepare1')}
                    >
                        <View style={styles.buttonIndicator}></View>
                        <Text style={styles.buttonText}>Disaster Alert</Text>
                        <View style={styles.iconContainer}>
                            <Text style={styles.buttonIcon}>⚠️</Text>
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
        backgroundColor: "#98D083",
    },
    header: {
        backgroundColor: "#8B4513",
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    backButton: {},
    backButtonText: {
        fontSize: 16,
        color: "#FFFFFF",
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "500",
        color: "#FFFFFF",
        textAlign: "center",
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFE4C4",
        margin: 20,
        top: "35%",
        borderRadius: 20,
        maxHeight: "45%"
    },
    button: {
        backgroundColor: "#5F8B4C",
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
        backgroundColor: "#FFFFFF",
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
    scoreboard: {
        position: 'absolute',
        top: 70,
        backgroundColor: 'rgba(95, 139, 76, 0.8)',
        borderRadius: 15,
        padding: 15,
        width: '85%',
        marginBottom: 15,
        right: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    scoreItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        paddingVertical: 8,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    },
    scoreLabel: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    scoreValue: {
        color: '#FFE4C4',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default EarthScienceScreen;