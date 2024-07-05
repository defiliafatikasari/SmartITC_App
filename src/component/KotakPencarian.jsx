import { View, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import IkonM from 'react-native-vector-icons/MaterialIcons';
import { hitam, biru } from '../constants/warna';

const KotakPencarian = ({ onSearch }) => {
  const [text, setText] = useState('');
  const handleSearch = () => {
    onSearch(text);
  };

  return (
    <View style={[styles.searchStyle, styles.flexRowCenter]}>
      <IkonM name="search" size={20} style={{ marginRight: 10, color: 'black', fontWeight: '800' }} />
      <TextInput 
        placeholder="Cari....." 
        placeholderTextColor="black" 
        style={styles.input} 
        value={text}
        onChangeText={setText} 
        onSubmitEditing={handleSearch} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchStyle: {
    backgroundColor: biru,
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    width: '90%', 
  },
  input: {
    flex: 1,
    color: hitam,
    paddingVertical: 5,
    fontWeight: '600',
  },
});

export default KotakPencarian;
