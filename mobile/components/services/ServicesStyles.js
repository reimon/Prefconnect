import { StyleSheet } from "react-native";

const colors = [
  "#FFCDD2",
  "#F8BBD0",
  "#E1BEE7",
  "#D1C4E9",
  "#C5CAE9",
  "#BBDEFB",
  "#B3E5FC",
  "#B2EBF2",
  "#B2DFDB",
  "#C8E6C9",
  "#DCEDC8",
  "#F0F4C3",
  "#FFF9C4",
  "#FFECB3",
  "#FFE0B2",
  "#FFCCBC",
];

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  button: {
    width: "48%",
    height: 100,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow for iOS
    shadowOpacity: 0.8, // Shadow for iOS
    shadowRadius: 2, // Shadow for iOS
    flexDirection: "row", // Adicionado para alinhar ícones e texto
    padding: 10, // Adicionado para dar espaço interno
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1, // Adicionado para centralizar o texto
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowIcon: {
    marginLeft: "auto", // Adicionado para posicionar a seta no final
  },
});

export const getButtonStyle = (index) => {
  return {
    backgroundColor: colors[index % colors.length],
  };
};
