import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { hitam, biru } from '../constants/warna';
import IkonF from 'react-native-vector-icons/FontAwesome5';
import IkonMc from 'react-native-vector-icons/MaterialCommunityIcons';
import IkonM from 'react-native-vector-icons/MaterialIcons';

const LayarKontak = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');

  const kirimPesan = () => {
    console.log('Nama:', nama);
    console.log('Email:', email);
    console.log('Pesan:', pesan);
    setNama('');
    setEmail('');
    setPesan('');
  };

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Kontak Kami</Text>
        <View style={styles.contactContainer}>
          <TouchableOpacity style={styles.contactInfo} onPress={() => handleLinkPress('https://www.google.com/maps/place/Jl.+Jalmak+Gg.+VII,+Kec.+Pamekasan,+Kabupaten+Pamekasan,+Jawa+Timur+69317/@-7.1748065,113.4675655,17.64z/data=!4m6!3m5!1s0x2dd77e710dcf1941:0x4e0028fcb27fa530!8m2!3d-7.1745629!4d113.4692136!16s%2Fg%2F11h_xhsm8t?entry=ttu')}>
            <View style={styles.iconContainer}>
              <IkonF name="map-marked-alt" color={biru} size={20} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Alamat:</Text>
              <Text style={styles.text}>Jalan Jalmak Gang.VII, Pamekasan, Jawa Timur</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactInfo} onPress={() => handleLinkPress('https://wa.me/6282197569330')}>
            <View style={styles.iconContainer}>
              <IkonMc name="whatsapp" color={biru} size={20} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>WhatsApp:</Text>
              <Text style={styles.text}>+6282197569330</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactInfo} onPress={() => handleLinkPress('tel:+6287862771867')}>
            <View style={styles.iconContainer}>
              <IkonMc name="phone" color={biru} size={20} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Phone:</Text>
              <Text style={styles.text}>+6287862771867</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactInfo} onPress={() => handleLinkPress('mailto:smartITC09@gmail.com')}>
            <View style={styles.iconContainer}>
              <IkonMc name="email" color={biru} size={20} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.text}>smartITC09@gmail.com</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactInfo} onPress={() => handleLinkPress('https://www.instagram.com/smartitc')}>
            <View style={styles.iconContainer}>
              <IkonMc name="instagram" color={biru} size={20} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Instagram:</Text>
              <Text style={styles.text}>@smartitc</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactInfo} onPress={() => handleLinkPress('https://www.facebook.com/smartitc')}>
            <View style={styles.iconContainer}>
              <IkonMc name="facebook" color={biru} size={20} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>Facebook:</Text>
              <Text style={styles.text}>Smart ITC</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactInfo} onPress={() => handleLinkPress('https://www.youtube.com/@smartitc')}>
            <View style={styles.iconContainer}>
              <IkonMc name="youtube" color={biru} size={20} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>YouTube:</Text>
              <Text style={styles.text}>@smartitc</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactInfo} onPress={() => handleLinkPress('https://www.tiktok.com/@smartitc')}>
            <View style={styles.iconContainer}>
              <IkonM name="tiktok" color={biru} size={20} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.label}>TikTok:</Text>
              <Text style={styles.text}>@smartitc</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.messageTitle}>Kirim Pesan</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan Nama Anda"
            placeholderTextColor="#999"
            value={nama}
            onChangeText={text => setNama(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Masukkan Email Anda"
            placeholderTextColor="#999"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={[styles.input, styles.pesanInput]}
            placeholder="Masukkan Pesan Anda"
            placeholderTextColor="#999"
            multiline={true}
            textAlignVertical="top"
            value={pesan}
            onChangeText={text => setPesan(text)}
          />
          <TouchableOpacity style={styles.kirimButton} onPress={kirimPesan}>
            <Text style={styles.kirimButtonText}>Kirim</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
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
    padding: 10,
    marginBottom: 20,
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
  messageContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
  },
  messageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: hitam,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    color: hitam,
  },
  pesanInput: {
    height: 100, 
  },
  kirimButton: {
    backgroundColor: biru,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  kirimButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LayarKontak;
