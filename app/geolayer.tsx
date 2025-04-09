import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import DraggableFlatList from "react-native-draggable-flatlist";
import useAchievements from "@/hooks/useTrophy";
import useScore from "@/hooks/useScore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define TypeScript type for images
type ImageItem = { id: string; source: any };

const images: ImageItem[] = [
  { id: ".20", source: require("../utils/pictures/.20.jpg") },
  { id: ".21", source: require("../utils/pictures/.21.jpg") },
  { id: ".22", source: require("../utils/pictures/.22.jpg") },
  { id: ".23", source: require("../utils/pictures/.23.jpg") },
];

const GeoLayer = () => {
  const router = useRouter();
  const [draggedItems, setDraggedItems] = useState<ImageItem[]>(images);
  const [dragging, setDragging] = useState(false);
  const {addAchievement} = useAchievements()
  const {setGeoLayerScore} = useScore();

  const [placedImages, setPlacedImages] = useState<{
    topLeft: ImageItem | null;
    topRight: ImageItem | null;
    bottomLeft: ImageItem | null;
    bottomRight: ImageItem | null;
  }>({
    topLeft: null,
    topRight: null,
    bottomLeft: null,
    bottomRight: null,
  });

  const handleDrop = (position: keyof typeof placedImages, item: ImageItem) => {
    setPlacedImages((prev) => ({
      ...prev,
      [position]: item,
    }));

    setDraggedItems((prev) => prev.filter((img) => img.id !== item.id));
  };

  const handleReturnToDraggableList = (position: keyof typeof placedImages) => {
    const item = placedImages[position];
    if (item) {
      setDraggedItems((prev) => [...prev, item]);
      setPlacedImages((prev) => ({
        ...prev,
        [position]: null,
      }));
    }
  };

  const checkPlacement = () => {
    return (
      placedImages.topLeft?.id === ".20" &&
      placedImages.topRight?.id === ".21" &&
      placedImages.bottomLeft?.id === ".22" &&
      placedImages.bottomRight?.id === ".23"
    );
  };

  async function submit() {
    let score = 0;
  
    if (placedImages.topLeft?.id === ".20") score += 2.5;
    if (placedImages.topRight?.id === ".21") score += 2.5;
    if (placedImages.bottomLeft?.id === ".22") score += 2.5;
    if (placedImages.bottomRight?.id === ".23") score += 2.5;

    if (placedImages.topLeft?.id !== ".20") score -= 1;
    if (placedImages.topRight?.id !== ".21") score -= 1;
    if (placedImages.bottomLeft?.id !== ".22") score -= 1;
    if (placedImages.bottomRight?.id !== ".23") score -= 1;
    if(score < 0) score = 0 
    
    await AsyncStorage.setItem('layerscore', score.toString())
    setGeoLayerScore(score); // Update the score
  
    setTimeout(() => {
      if (checkPlacement()) {
        addAchievement("Master Puzzle");
      }
      router.push("/geolayerscore");
    }, 100); // Delay navigation slightly to allow state update
  }
  
  
  
  

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Title */}
        <View style={styles.headerdesign}><Text style={styles.title}>Quake Puzzle</Text></View>
        
        {/* Exit Button */}
        <TouchableOpacity style={styles.exitButton} onPress={() => router.back()}>
          <Text style={styles.exitText}>Back</Text>
        </TouchableOpacity>

        {/* Instruction */}
        <Text style={styles.description}>Tap the puzzle piece and tap the container to place pieces. Tap the container again to remove the piece.</Text>

        {/* Drop Zone */}
        <View style={styles.dropZone}>
          <View style={styles.dropRow}>
            {(["topLeft", "topRight"] as const).map((pos) => (
              <TouchableOpacity
                key={pos}
                style={[styles.dropSlot, placedImages[pos] && styles.filledSlot]}
                onPress={() =>
                  placedImages[pos]
                    ? handleReturnToDraggableList(pos)
                    : draggedItems.length > 0 && handleDrop(pos, draggedItems[0])
                }
              >
                {placedImages[pos] && (
                  <Image source={placedImages[pos]!.source} style={styles.image} />
                )}
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
          style={styles.checkButton}
          onPress={() => submit()}
        >
          <Text style={styles.checkText}>Submit</Text>
        </TouchableOpacity>
          <View style={styles.dropRow}>
            {(["bottomLeft", "bottomRight"] as const).map((pos) => (
              <TouchableOpacity
                key={pos}
                style={[styles.dropSlot, placedImages[pos] && styles.filledSlot]}
                onPress={() =>
                  placedImages[pos]
                    ? handleReturnToDraggableList(pos)
                    : draggedItems.length > 0 && handleDrop(pos, draggedItems[0])
                }
              >
                {placedImages[pos] && (
                  <Image source={placedImages[pos]!.source} style={styles.image} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Draggable Image List */}
        <DraggableFlatList
          data={draggedItems}
          keyExtractor={(item) => item.id}
          horizontal={true} // Enables horizontal scrolling
          contentContainerStyle={styles.draggableList} // Centers items
          renderItem={({ item, drag, isActive }) => (
            <TouchableOpacity
              style={[styles.draggableItem, isActive && styles.activeDrag]}
              onLongPress={() => {
                setDragging(true);
                drag();
              }}
              onPressOut={() => setDragging(false)}
            >
              <Image source={item.source} style={styles.image} />
            </TouchableOpacity>
          )}
          onDragEnd={({ data }) => {
            setDragging(false);
            setDraggedItems(data);
          }}
        />

        {/* Dragging Indicator */}
        {dragging && <Text style={styles.draggingIndicator}>Dragging...</Text>}

        {/* Check Button */}
        
      </View>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#98D083",
    alignItems: "center",
    paddingTop: 90, // Adjusted to avoid clipping
    paddingBottom: 30,
  },
  exitButton: {
    position: 'absolute' as const,
    top: 20,
    left: 25,
    paddingVertical: 8,
    paddingHorizontal: 12,
    height: 40,
    width: 50,
    backgroundColor: '#4A3333',
    borderRadius: 8, 
  },
  exitText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500' as const,
  },
  headerdesign:{
    position: 'absolute' as const,
    top: 5,
    backgroundColor: '#4A3333',
    paddingHorizontal: 150,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{ scale: 1.2 }],
  },

  title: {
    top: 0,
    fontSize: 22,
    fontWeight: 'bold' as const,
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center' as const,
  },

  description:{
    top: 0,
    fontSize: 15,
    fontWeight: 'bold' as const,
    marginTop: 10,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center' as const,
  },
  dropZone: {
    width: 250,
    height: 270,
    backgroundColor: "#ddd",
    borderWidth: 2,
    borderColor: "#aaa",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0, // Increased for better visibility
    padding: 10,
  },
  dropRow: {
    flexDirection: "row",
  },
  dropSlot: {
    width: 100,
    height: 100,
    backgroundColor: "#bbb",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 5,
  },
  filledSlot: {
    backgroundColor: "#eee",
  },
  draggableList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  draggableItem: {
    padding: 10,
    marginHorizontal: 3, // Ensures better spacing
    marginBottom: 50,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  activeDrag: {
    backgroundColor: "#ccc",
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  draggingIndicator: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF4500",
    textAlign: "center",
    marginBottom: 10,
  },
  checkButton: {
    backgroundColor: "#98D083",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 0,
  },
  checkText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GeoLayer;