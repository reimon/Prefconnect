// EventForm.js
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Toolbar from "./Toolbar"; // Importa o componente da barra de ferramentas
import styles from "./EventFormStyles"; // Importa os estilos
import { FontAwesome } from "@expo/vector-icons";

const EventForm = ({
  userProfile,
  text,
  setText,
  imageUris,
  handleIconPress,
  addEvent,
  closeModal,
  removeImage,
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.modalContainer}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={addEvent} style={styles.addButton}>
          <Text style={styles.addButtonText}>Postar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        {userProfile.profileImageUrl ? (
          <Image
            source={{ uri: userProfile.profileImageUrl }}
            style={styles.modalProfileImage}
          />
        ) : (
          <View style={styles.modalProfilePlaceholder} />
        )}
        <Text style={styles.profileName}>
          {userProfile.username || "Usuário"}
        </Text>
      </View>
      <TextInput
        placeholder="O que está acontecendo?"
        placeholderTextColor="#888"
        value={text} // Vincula o valor do TextInput ao estado text
        onChangeText={setText} // Atualiza o estado text ao alterar o texto
        style={styles.textInput}
        multiline
      />
      <View style={styles.imageGrid}>
        {imageUris.map((uri, index) => (
          <View key={index} style={styles.imageWrapper}>
            <Image source={{ uri }} style={styles.imagePreview} />
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeImage(index)}
            >
              <FontAwesome name="times" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.sendButton} onPress={addEvent}>
        <Text style={styles.sendButtonText}>Enviar</Text>
      </TouchableOpacity>
      <Toolbar onIconPress={handleIconPress} />
    </KeyboardAvoidingView>
  );
};

export default EventForm;
