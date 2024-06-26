import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import KotakPencarian from '../component/KotakPencarian';
import GmbrLogo from '../assets/gambar/LogoSitc.png';
import Banner from '../component/Banner';
import DaftarPelsus from '../component/DaftarPelsus';
import { hitam } from '../constants/warna';

const LayarBeranda = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text.toLowerCase()); // Mengubah teks pencarian menjadi huruf kecil untuk pencarian yang tidak bersifat case sensitive
  };

  return (
    <View style={styles.container}>
      <Image source={GmbrLogo} style={styles.imglogo} />
      <Text style={styles.text}>Smart Information Training And Courses</Text>
      <KotakPencarian onSearch={handleSearch} />

      <View style={{ height: 15 }} />
      <Banner />
      <View style={{ height: 20 }} />
      <DaftarPelsus title={'Training (Pelatihan)'} searchQuery={searchText} navigation={navigation} />
      <DaftarPelsus title={'Courses (Kursus)'} searchQuery={searchText} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },
  text: {
    fontSize: 20,
    color: hitam,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imglogo: {
    margin: 5,
    width: 100,
    height: 50,
  },
});

export default LayarBeranda;
