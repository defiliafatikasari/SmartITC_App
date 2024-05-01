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
      <View style={styles.contactInfo}>
      <IkonF name="map-marked-alt" color={biru} size={26} /><Text style={styles.label}>Alamat:</Text>
        <Text style={{color: hitam}}>Jalan Jalmak Gang.VII, Pamekasan, Jawa Timur</Text>
      </View>
      <View style={styles.contactInfo}>
      <IkonMc name="whatsapp" color={biru} size={26} /><Text style={styles.label}>WhatsApp:</Text>
        <Text style={{color: hitam}}>+6292197569330</Text>
      </View>
      <View style={styles.contactInfo}>
      <IkonMc name="phone" color={biru} size={26} /><Text style={styles.label}>Phone:</Text>
        <Text style={{color: hitam}}>+6297862771867</Text>
      </View>
      <View style={styles.contactInfo}>
      <IkonMc name="email" color={biru} size={26} /><Text style={styles.label}>Email:</Text>
        <Text style={{color: hitam}}>smartITC09@gmail.com</Text>
      </View>
      <View style={styles.contactInfo}>
      <IkonMc name="instagram" color={biru} size={26} /><Text style={styles.label}>Instagram:</Text>
        <Text style={{color: hitam}}>@smartitc</Text>
      </View>
      <View style={styles.contactInfo}>
      <IkonMc name="facebook" color={biru} size={26} /><Text style={styles.label}>Facebook:</Text>
        <Text style={{color: hitam}}>Smart ITC</Text>
      </View>
      <View style={styles.contactInfo}>
      <IkonMc name="youtube" color={biru} size={26} /><Text style={styles.label}>YouTube:</Text>
        <Text style={{color: hitam}}>@smartitc</Text>
      </View>
      <View style={styles.contactInfo}>
      <IkonM name="tiktok" color={biru} size={26} /><Text style={styles.label}>TikTok</Text>
        <Text style={{color: hitam}}>@smartitc</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: hitam,
    marginBottom: 30,
  },
  contactInfo: {
    color: hitam,
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    color: hitam,
  },
});

export default LayarKontak;
