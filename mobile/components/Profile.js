import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons"; // Importando FontAwesome
import postsData from "../store/posts.json";
import profileData from "../store/profile.json";
import friendsData from "../store/friends.json";

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState({});
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setPosts(postsData);
    setProfile(profileData);
    setFriends(friendsData.closeFriends);
  }, []);

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar
        backgroundColor="#6200EE"
        barStyle="dark-content" // Define o estilo dos ícones da barra de status como preto
      />
      <LinearGradient
        colors={["#FFFFFF", "#6200EE"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.headerContainer}
      >
        <View style={styles.header}>
          <Image
            source={{ uri: profile.profileImageUrl }}
            style={styles.profileImage}
          />
          <Text style={styles.username}>{profile.username}</Text>
          <Text style={styles.userDetails}>{profile.bio}</Text>
        </View>

        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome name="edit" size={24} color="#fff" />
            <Text style={styles.menuText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome name="share" size={24} color="#fff" />
            <Text style={styles.menuText}>Share Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome name="cog" size={24} color="#fff" />
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.statsContainer}>
        <View style={styles.stats}>
          <Text style={styles.statsText}>23</Text>
          <Text style={styles.statsLabel}>Received</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statsText}>20</Text>
          <Text style={styles.statsLabel}>Sent</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statsText}>210</Text>
          <Text style={styles.statsLabel}>Friends</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statsText}>10</Text>
          <Text style={styles.statsLabel}>Wishlist</Text>
        </View>
      </View>

      <View style={styles.friendsContainer}>
        <Text style={styles.friendsTitle}>Sua lista de amigos próximos:</Text>
        <FlatList
          data={friends}
          renderItem={({ item }) => (
            <View style={styles.friendItem}>
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.friendImage}
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
          numColumns={5} // Define o número de colunas como 5
          columnWrapperStyle={styles.columnWrapper} // Aplica estilo às colunas
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.friendsList}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    paddingTop: Platform.OS === "ios" ? 44 : StatusBar.currentHeight, // Ajuste para incluir a barra de status no iOS
  },
  header: {
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
  },
  username: {
    marginTop: 10,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  userDetails: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "transparent",
  },
  menuItem: {
    alignItems: "center",
  },
  menuText: {
    fontSize: 14,
    color: "#fff",
    marginTop: 4, // Espaço entre o ícone e o texto
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  stats: {
    alignItems: "center",
  },
  statsText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statsLabel: {
    fontSize: 14,
    color: "#666",
  },
  friendsContainer: {
    padding: 20,
  },
  friendsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  friendsList: {
    justifyContent: "center",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  friendItem: {
    alignItems: "center",
    margin: 5,
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default Profile;
