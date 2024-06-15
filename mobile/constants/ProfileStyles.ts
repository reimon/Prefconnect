import { StyleSheet } from "react-native";
import Colors from "./Colors"; // Ajuste o caminho conforme necessário

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background, // Definir cor de fundo aqui
  },
  header: {
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: Colors.light.text, // Definir cor do texto aqui
  },
  userDetails: {
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
    color: Colors.light.text, // Definir cor do texto aqui
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around", // Distribui os itens com espaço ao redor
    alignItems: "center",
    marginVertical: 20,
    paddingVertical: 10,
  },
  stats: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 15,
  },
  statsText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  statsLabel: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  menuItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  menuText: {
    color: Colors.light.text, // Definir cor do texto aqui
  },
  highlightsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  highlight: {
    fontSize: 14,
    color: Colors.light.text, // Definir cor do texto aqui
  },
  postsContainer: {
    paddingBottom: 10,
  },
  postContainer: {
    flex: 1,
    margin: 1,
    aspectRatio: 1,
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
