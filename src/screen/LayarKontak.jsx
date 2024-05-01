import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { hitam, biru } from '../constants/warna';
import IkonF from 'react-native-vector-icons/FontAwesome5';
import IkonMc from 'react-native-vector-icons/MaterialCommunityIcons';
import IkonM from 'react-native-vector-icons/MaterialIcons';

const LayarKontak = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kontak Kami</Text>
      <View style={styles.contactContainer}>
        <View style={styles.contactInfo}>
          <View style={styles.iconContainer}>
            <IkonF name="map-marked-alt" color={biru} size={20} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Alamat:</Text>
            <Text style={styles.text}>Jalan Jalmak Gang.VII, Pamekasan, Jawa Timur</Text>
          </View>
        </View>
        <View style={styles.contactInfo}>
          <View style={styles.iconContainer}>
            <IkonMc name="whatsapp" color={biru} size={20} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.label}>WhatsApp:</Text>
            <Text style={styles.text}>+6292197569330</Text>
          </View>
        </View>
        <View style={styles.contactInfo}>
          <View style={styles.iconContainer}>
            <IkonMc name="phone" color={biru} size={20} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.text}>+6297862771867</Text>
          </View>
        </View>
        <View style={styles.contactInfo}>
          <View style={styles.iconContainer}>
            <IkonMc name="email" color={biru} size={20} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.text}>smartITC09@gmail.com</Text>
          </View>
        </View>
        <View style={styles.contactInfo}>
          <View style={styles.iconContainer}>
            <IkonMc name="instagram" color={biru} size={20} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Instagram:</Text>
            <Text style={styles.text}>@smartitc</Text>
          </View>
        </View>
        <View style={styles.contactInfo}>
          <View style={styles.iconContainer}>
            <IkonMc name="facebook" color={biru} size={20} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.label}>Facebook:</Text>
            <Text style={styles.text}>Smart ITC</Text>
          </View>
        </View>
        <View style={styles.contactInfo}>
          <View style={styles.iconContainer}>
            <IkonMc name="youtube" color={biru} size={20} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.label}>YouTube:</Text>
            <Text style={styles.text}>@smartitc</Text>
          </View>
        </View>
        <View style={styles.contactInfo}>
          <View style={styles.iconContainer}>
            <IkonM name="tiktok" color={biru} size={20} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.label}>TikTok:</Text>
            <Text style={styles.text}>@smartitc</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  contactContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    
  },
  contactInfo: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  iconContainer: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#555',
    fontSize: 18,
  },
  text: {
    color: '#666',
    fontSize: 16,
  },
});

export default LayarKontak;
