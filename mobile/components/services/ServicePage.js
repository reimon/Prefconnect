import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ServicePage = ({ route }) => {
  const { service } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{service.name}</Text>
      <View style={styles.detailsContainer}>
        <Text>Telefone: {service.phone}</Text>
        <Text>Email: {service.email}</Text>
        <Text>Horário: {service.hours}</Text>
        <Text>Endereço: {service.address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  detailsContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
});

export default ServicePage;
