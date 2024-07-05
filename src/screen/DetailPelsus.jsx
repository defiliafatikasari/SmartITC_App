import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, Dimensions, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { biru, hitam, border, abu } from "../constants/warna";
import IkonM from 'react-native-vector-icons/MaterialIcons';
import IkonF from 'react-native-vector-icons/FontAwesome';
import { FavoriteContext } from '../component/FavoriteContext';

const { width } = Dimensions.get('window');

export default function DetailPelsus({ route }) {
  const { detail } = route.params;
  const navigation = useNavigation();
  const { favorites, addFavorite, removeFavorite, isFavorite } = useContext(FavoriteContext);
  const [isFavorited, setIsFavorited] = useState(isFavorite(detail));
  useEffect(() => {
    setIsFavorited(isFavorite(detail));
  }, [favorites, detail, isFavorite]);
  const openLink = (url) => {
    Linking.openURL(url);
  };
  const toggleFavorite = () => {
    if (isFavorited) {
      removeFavorite(detail);
    } else {
      addFavorite(detail);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <IkonM name="chevron-left" size={30} color={hitam} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
          <IkonF name={isFavorited ? "heart" : "heart-o"} size={24} color={isFavorited ? biru : hitam} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Image source={detail.image} style={styles.image} resizeMode="contain" />
        <View style={styles.content}>
          <Text style={styles.title}>{detail.title}</Text>
          <Text style={styles.description}>{detail.description}</Text>
          {detail.link && (
            <TouchableOpacity onPress={() => openLink(detail.link)} style={styles.linkButton}>
              <Text style={styles.linkText}>Kunjungi Pelatihan/Kursus</Text>
              <IkonM name="open-in-new" size={16} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: abu,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
  },
  favoriteButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: width - 48, 
    height: (width - 48) * 0.8, 
    marginBottom: 20,
    alignSelf: 'center', 
    borderRadius: 10, 
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: border,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: hitam,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: hitam,
    marginBottom: 20,
    lineHeight: 24,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: biru,
    paddingVertical: 10,
    borderRadius: 50,
  },
  linkText: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
  },
});
