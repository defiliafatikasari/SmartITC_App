import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { biru, hitam, abumuda } from "../constants/warna";
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
          <View key={item.id} style={styles.itemContainer}>
            <TouchableOpacity
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
                <IkonF name="times" size={20} color={hitam} />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0F0F0',  
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: hitam,
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#FFF', 
    shadowColor: biru,  
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,  
    shadowRadius: 8,    
    elevation: 6,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 15,
    borderRadius: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: hitam,
  },
  description: {
    fontSize: 16,
    color: abumuda, 
  },
  removeButton: {
    padding: 8,
    backgroundColor: '#F5F5F5',  
    borderRadius: 50,
  },
});

export default Favorit;
