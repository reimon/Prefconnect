// Toolbar.js
import React from "react";
import { View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./ToolbarStyles"; // Importa os estilos da barra de ferramentas

const Toolbar = ({ onIconPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onIconPress("mic")}>
        <Icon name="microphone" size={24} color="white" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onIconPress("image")}>
        <Icon name="image" size={24} color="white" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onIconPress("location")}>
        <Icon name="map-marker" size={24} color="white" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Toolbar;
