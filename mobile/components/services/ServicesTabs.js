import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, ScrollView, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles, { getButtonStyle } from "./ServicesStyles";
import servicesData from "../../store/services.json";

const getServiceIcon = (serviceName) => {
  switch (serviceName) {
    case "Cultura":
      return "local-library";
    case "Educação":
      return "school";
    case "Esporte e Lazer":
      return "directions-run";
    case "Meio Ambiente":
      return "nature";
    case "Planejamento Urbano":
      return "location-city";
    case "Saneamento":
      return "water";
    case "Serviços Urbanos":
      return "build";
    case "Social":
      return "group";
    case "IPTU":
      return "attach-money";
    case "Iluminação":
      return "wb-sunny";
    case "Coleta de Lixo":
      return "delete";
    case "Outros Tributos":
      return "money";
    default:
      return "help";
  }
};

const ServiceButton = ({ service, onPress, index }) => (
  <TouchableOpacity
    style={[styles.button, getButtonStyle(index)]}
    onPress={() => onPress(service)}
  >
    <View style={styles.iconContainer}>
      <Icon name={getServiceIcon(service.name)} size={24} color="#000" />
      <Text style={styles.buttonText}>{service.name}</Text>
      <Icon
        name="chevron-right"
        size={24}
        color="#000"
        style={styles.arrowIcon}
      />
    </View>
  </TouchableOpacity>
);

const ServicesTabs = ({ navigation }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesData);
  }, []);

  const handlePress = (service) => {
    navigation.navigate("ServicePage", { service });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {services.map((service, index) => (
        <ServiceButton
          key={index}
          service={service}
          onPress={handlePress}
          index={index}
        />
      ))}
    </ScrollView>
  );
};

export default ServicesTabs;
