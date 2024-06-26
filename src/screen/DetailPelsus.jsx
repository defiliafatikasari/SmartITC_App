import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { biru, hitam } from "../constants/warna";
import IkonM from 'react-native-vector-icons/MaterialIcons';

export default function DetailPelsus({ route }) {
  const { detail } = route.params;
  const navigation = useNavigation();

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <IkonM name="chevron-left" size={24} color={hitam} />
      </TouchableOpacity>
      <Image source={detail.image} style={styles.image} />
      <Text style={styles.title}>{detail.title}</Text>
      <Text style={styles.description}>{detail.description}</Text>
      {detail.link && (
        <TouchableOpacity onPress={() => openLink(detail.link)}>
          <Text style={styles.link}>Kunjungi Pelatihan</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: hitam,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: hitam,
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    color: biru,
    textDecorationLine: 'underline',
  },
});
