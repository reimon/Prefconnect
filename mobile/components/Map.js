// components/Map.js
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import markersData from "../store/markers.json"; // Atualize o caminho conforme necessário

export default function Map() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [region, setRegion] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setMarkers(markersData); // Carregar os marcadores do arquivo JSON
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  const centerMap = () => {
    if (location) {
      mapRef.current.animateToRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    } else {
      Alert.alert("Location not available");
    }
  };

  const calculateMarkerSize = () => {
    // Base size is 30, scale up based on zoom level
    const baseSize = 30;
    const zoomFactor = region ? 1 / region.latitudeDelta : 1; // Assuming latitudeDelta will give us a good zoom factor
    const size = Math.min(Math.max(baseSize * zoomFactor, 30), 100); // Limit size between 30 and 100
    return {
      width: size,
      height: size,
      borderRadius: size / 2,
    };
  };

  return (
    <View style={styles.container}>
      {region && (
        <MapView
          style={styles.map}
          initialRegion={region}
          onRegionChangeComplete={setRegion}
          provider="google"
          ref={mapRef}
        >
          {location && (
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="Your Location"
            />
          )}
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.name}
              description={marker.description}
            >
              <View style={[styles.markerContainer, calculateMarkerSize()]}>
                <Image
                  source={{ uri: marker.imageUrl }}
                  style={styles.markerImage}
                />
              </View>
            </Marker>
          ))}
        </MapView>
      )}
      <TouchableOpacity style={styles.locateButton} onPress={centerMap}>
        <Ionicons name="locate" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 50, // Adjust height to accommodate button
  },
  locateButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007AFF",
    borderRadius: 50,
    padding: 10,
  },
  markerImage: {
    width: "100%",
    height: "100%",
  },
  markerContainer: {
    borderColor: "#FF0",
    borderWidth: 4,
    backgroundColor: "blue",
    overflow: "hidden",
  },
});
