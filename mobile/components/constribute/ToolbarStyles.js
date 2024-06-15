// ToolbarStyles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row", // Alinha os ícones horizontalmente
    justifyContent: "space-around", // Espaço uniforme entre os ícones
    paddingVertical: 10,
    backgroundColor: "#000",
    width: "90%", // Faz a barra ocupar toda a largura do modal
    position: "absolute",
    bottom: 60, // Ajusta a posição vertical da toolbar
    left: "5%", // Centraliza a toolbar horizontalmente
  },
  icon: {
    marginHorizontal: 10, // Espaçamento horizontal entre os ícones
  },
});
