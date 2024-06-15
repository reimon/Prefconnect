// ContributeStyles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  postContainer: {
    margin: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 10,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postHeaderInfo: {
    marginLeft: 10,
  },
  username: {
    fontWeight: "bold",
  },
  location: {
    color: "#888",
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  postFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  postActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  likes: {
    fontWeight: "bold",
    marginTop: 5,
  },
  caption: {
    marginTop: 5,
  },
  comments: {
    color: "#888",
    marginTop: 5,
  },
  timeAgo: {
    color: "#888",
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: "#000",
    color: "#fff",
    borderWidth: 0,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 18,
    textAlignVertical: "top",
    lineHeight: 22,
  },
  addButton: {
    backgroundColor: "#007bff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  closeButton: {
    backgroundColor: "#ff0000",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  modalProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    color: "#fff",
    fontSize: 18,
  },
  modalProfilePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc",
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 35,
    backgroundColor: "#007bff",
    borderRadius: 50,
    padding: 15,
    zIndex: 1,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  toolbarContainer: {
    position: "absolute",
    bottom: 60,
    left: "5%",
    backgroundColor: "#000",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
