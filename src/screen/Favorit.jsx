import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hitam } from '../constants/warna'
import { useNavigation } from '@react-navigation/native'; 
import IkonM from 'react-native-vector-icons/MaterialIcons'

const Favorit = () => {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <Text style={{color: hitam}}>ini nanti isi beberapa pelatihan dan kursus yang disimpan ketika di klik icon love oleh user</Text>
    </View>
  )
}

export default Favorit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});