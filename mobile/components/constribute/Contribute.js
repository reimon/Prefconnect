// Contribute.js
import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Alert,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import postsData from "../../store/posts.json";
import profileData from "../../store/profile.json";
import styles from "./ContributeStyles";
import * as ImagePicker from "expo-image-picker";
import EventForm from "./EventForm";
import { uploadFileToCloud } from "../../utils/uploadFile";

export default function ContributeScreen() {
  const [posts, setPosts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [imageUris, setImageUris] = useState([]);
  const [text, setText] = useState("");
  const [buttonOpacity] = useState(new Animated.Value(1));
  const userProfile = profileData;

  useEffect(() => {
    setPosts(postsData);
  }, []);

  const addEvent = async () => {
    console.log("addEvent called");
    let uploadedUrls = [];
    if (imageUris.length > 0) {
      try {
        for (const uri of imageUris) {
          console.log("Uploading image:", uri);
          const imageUrl = await uploadFileToCloud(uri);
          console.log("Image uploaded:", imageUrl);
          uploadedUrls.push(imageUrl);
        }
        const newPost = {
          id: (Math.random() * 10000).toFixed(0),
          user: userProfile.username || "Usuário",
          imageUrls: uploadedUrls,
          text: text,
          likes: 0,
          commentsCount: 0,
          timeAgo: "Just now",
        };
        setPosts([newPost, ...posts]);
        Alert.alert("Sucesso", "Imagens enviadas com sucesso.");
      } catch (error) {
        Alert.alert("Erro", "Erro ao fazer upload das imagens.");
        console.error("Erro ao fazer upload da imagem: ", error);
        return;
      }
    }
    setModalVisible(false);
    setImageUris([]);
    setText("");
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permissão necessária",
        "Permissão para acessar a galeria é necessária!"
      );
      return;
    }

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
      });

      if (!result.cancelled && result.assets) {
        const selectedUris = result.assets.map((asset) => asset.uri);
        const totalSelected = imageUris.length + selectedUris.length;

        if (totalSelected > 4) {
          Alert.alert(
            "Limite de Imagens",
            "Você só pode selecionar até 4 imagens."
          );
        } else {
          setImageUris((prevUris) => [...prevUris, ...selectedUris]);
          console.log("Images selected:", selectedUris);
        }
      }
    } catch (error) {
      console.error("Erro ao selecionar imagens: ", error);
    }
  };

  const removeImage = (index) => {
    setImageUris((prevUris) => prevUris.filter((_, i) => i !== index));
  };

  const handleIconPress = (icon) => {
    switch (icon) {
      case "image":
        pickImage();
        break;
      default:
        break;
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image
          source={{
            uri: userProfile.profileImageUrl,
          }}
          style={styles.profileImage}
        />
        <View style={styles.postHeaderInfo}>
          <Text style={styles.username}>{item.user}</Text>
        </View>
        <Feather name="more-vertical" size={24} color="black" />
      </View>
      {item.imageUrls &&
        item.imageUrls.map((url, index) => (
          <Image key={index} source={{ uri: url }} style={styles.postImage} />
        ))}
      <View style={styles.postFooter}>
        <View style={styles.postActions}>
          <FontAwesome name="heart-o" size={24} color="black" />
          <FontAwesome name="comment-o" size={24} color="black" />
          <FontAwesome name="send-o" size={24} color="black" />
        </View>
        <FontAwesome name="bookmark-o" size={24} color="black" />
      </View>
      <Text style={styles.likes}>{item.likes} Likes</Text>
      <Text style={styles.caption}>
        <Text style={styles.username}>{item.user} </Text>
        {item.text}
      </Text>
      <Text style={styles.comments}>
        View all {item.commentsCount} comments
      </Text>
      <Text style={styles.timeAgo}>{item.timeAgo}</Text>
    </View>
  );

  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    const newOpacity = scrollY > 45 ? 0.5 : 1;
    Animated.timing(buttonOpacity, {
      toValue: newOpacity,
      duration: 20,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.list}
        onScroll={handleScroll}
      />
      <Animated.View
        style={[styles.floatingButton, { opacity: buttonOpacity }]}
      >
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <FontAwesome name="plus" size={24} color="white" />
        </TouchableOpacity>
      </Animated.View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.modalContainer}
        >
          <EventForm
            userProfile={userProfile}
            text={text}
            setText={setText}
            imageUris={imageUris}
            handleIconPress={handleIconPress}
            addEvent={addEvent}
            closeModal={() => setModalVisible(false)}
            removeImage={removeImage}
          />
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}
