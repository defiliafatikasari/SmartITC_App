import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { hitam } from "../constants/warna";
import GmbrLogo from '../assets/gambar/LogoSitc.png';

export default function LayarTentang() {
  return (
    <View style={styles.container}>
      <Image source={GmbrLogo} style={styles.imglogo}/>
      <Text style={styles.title}>Welcome to Smart ITC</Text>
      <Text style={styles.subtitle}>Information, Training, and Courses in Indonesia</Text>
      <Text style={styles.description}>
        Smart ITC is your gateway to a world of information, high-quality training programs,
        and comprehensive courses in Indonesia. We are committed to providing top-notch
        educational resources to empower individuals and organizations.
      </Text>
      <Text style={styles.footer}>Empowering People. Transforming Futures.</Text>
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
