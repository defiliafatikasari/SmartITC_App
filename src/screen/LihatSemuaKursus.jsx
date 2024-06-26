import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; 

const LihatSemuaKursus = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);

  // Fungsi untuk menampilkan atau menyembunyikan kolom pencarian
  const handleSearchPress = () => {
    setShowSearchInput(!showSearchInput); 
    setSearchQuery(''); 
  };

  // Fungsi untuk menangani perubahan input pencarian
  const handleInputChange = (text) => {
    setSearchQuery(text);
  };

  // Fungsi untuk menangani submit pencarian
  const handleSearchSubmit = () => {
    console.log('Pencarian: ', searchQuery);
  };

  return (
    <ImageBackground
      source={require('../assets/gambar/bg.jpg')}
      style={styles.container}
    >
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
        <Icon name="search" size={24} color="white" />
      </TouchableOpacity>
      {showSearchInput && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Cari..."
            placeholderTextColor="white"
            onChangeText={handleInputChange}
            onSubmitEditing={handleSearchSubmit}
            maxLength={30} 
          />
        </View>
      )}
      <View style={styles.overlay}>
        <Text style={styles.text}>Kursus</Text>
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
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  searchButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
  },
  searchContainer: {
    position: 'absolute',
    top: 20,
    right: 70,
    maxWidth: 250,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    color: 'white',
  },
});
