import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
} from "react-native";
import axios from "axios";
import { NEWS_API_KEY } from "@env";
import styles from "../styles/NewsStyles"; // Importando os estilos

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          country: "us",
          category: "technology",
          apiKey: NEWS_API_KEY,
        },
      });
      setNews(response.data.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news: ", error);
      setLoading(false);
    }
  };

  const renderNewsItem = ({ item }) => (
    <TouchableOpacity
      style={styles.newsItem}
      onPress={() => Linking.openURL(item.url)}
    >
      <Image source={{ uri: item.urlToImage }} style={styles.newsImage} />
      <View style={styles.newsTextContainer}>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200EE" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        renderItem={renderNewsItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default News;
