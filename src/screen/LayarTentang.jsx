import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { hitam } from "../constants/warna";
import GmbrLogo from '../assets/gambar/LogoSitc.png';

export default function LayarTentang() {
  return (
    <View style={styles.container}>
      <Image source={GmbrLogo} style={styles.imglogo}/>
      <Text style={styles.title}>Selamat Datang di Smart ITC</Text>
      <Text style={styles.subtitle}>Informasi Pelatihan dan Kursus Lengkap di Indonesia</Text>
      <Text style={styles.description}>
        Smart ITC adalah pintu gerbang Anda ke dunia informasi, program pelatihan berkualitas tinggi,
        dan kursus komprehensif di Indonesia. 
      </Text>
      <Text style={styles.footer}>Semangat Mengembangkan Kemampuan Anda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  imglogo: {
    alignSelf: 'center',
    width: 100, 
    height: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: hitam,
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: hitam,
    textAlign: "center",
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: hitam,
    textAlign: "center",
    marginVertical: 10,
  },
  footer: {
    fontSize: 14,
    color: hitam,
    textAlign: "center",
    marginTop: 20,
  },
});
