import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const LihatSemuaKursus = () => {
  return (
    <ImageBackground
      source={require('../assets/gambar/bg.jpg')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>Isi Nanti Belum ada Konsep Kursus</Text>
      </View>
    </ImageBackground>
  );
}

export default LihatSemuaKursus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
