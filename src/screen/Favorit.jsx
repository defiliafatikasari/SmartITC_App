// Favorit.js
import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { biru, hitam } from "../constants/warna";
import IkonF from 'react-native-vector-icons/FontAwesome';
import { FavoriteContext } from '../component/FavoriteContext';

const Favorit = () => {
  const navigation = useNavigation();
  const { favorites, removeFavorite } = useContext(FavoriteContext);
  const navigateToDetail = (item) => {
    navigation.navigate('DetailPelsus', { detail: item });
  };
  const removeFromFavorites = (item) => {
    console.log(`Item to remove: ${item.id}`); 
    removeFavorite(item);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Favorit</Text>
        {favorites.map((item) => (
          <TouchableOpacity
            key={item.id} 
            style={styles.item}
            onPress={() => navigateToDetail(item)}
          >
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text numberOfLines={2} style={styles.description}>{item.description}</Text>
            </View>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeFromFavorites(item)}
            >
              <IkonF name="times" size={16} color={hitam} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: hitam,
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: hitam,
  },
  description: {
    fontSize: 14,
    color: hitam,
  },
  removeButton: {
    padding: 5,
  },
});

export default Favorit;
