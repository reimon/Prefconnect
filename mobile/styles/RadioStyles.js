import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
    padding: 10,
  },
  button: {
    marginHorizontal: 20,
  },
});
