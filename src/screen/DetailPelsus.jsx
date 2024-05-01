import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { hitam } from '../constants/warna'
import { useNavigation } from '@react-navigation/native'; 
import IkonM from 'react-native-vector-icons/MaterialIcons'

const DetailPelsus = () => {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('LayarBeranda')} style={styles.backButton}>
        <IkonM name="chevron-left" size={24} color={hitam} />
      </TouchableOpacity>
      <View style={{height: 20}}/>
      <Text style={{color: hitam}}>isi Nanti Dulu</Text>
    </View>
  )
}

export default DetailPelsus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});