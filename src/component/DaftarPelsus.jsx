import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { hitam, biru, border } from "../constants/warna";
import { Dbs, Dicoding, LogoCodePolitan, LogoFi, LogoMyskill, LogoSkilvull } from "../constants/gambar"; 
import IkonM from "react-native-vector-icons/MaterialIcons";
import LihatSemua from "../screen/LihatSemua";

const training = [
  { image: LogoCodePolitan, title: "CodePolitan", description: ""},
  { image: Dicoding, title: "Dicoding", description: ""},
  { image: LogoMyskill, title: "MySkill", description: ""},
  { image: LogoSkilvull, title: "SkilVull", description: ""},
];

const course = [
    { image: LogoFi, title: "Family Institute", description: ""},
    { image: Dbs, title: "DBS", description: ""},
    { image: LogoSkilvull, title: "Course", description: ""},
    { image: LogoMyskill, title: "Course", description: ""},
];

export default function DaftarPelsus({ title, navigation }) {

  const data = title === 'Training (Pelatihan)' ? training : course;
  
  const navigateToDetail = (detail) => {
      navigation.navigate('DetailPelsus', { detail });
  }

  return (
    <>
      <View style={[styles.flexRowCenter, { justifyContent: 'space-between', paddingHorizontal: 24 }]}>
        <Text style={[{ color: hitam, fontSize: 24, fontWeight: '800' }, styles.titleText]}>{title}</Text>
        <TouchableOpacity onPress={() => navigation.navigate (LihatSemua)}>
         <Text style={{ color: biru, fontSize: 16, fontWeight: '600'}}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>


      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map((detail, index) => (
          <TouchableOpacity key={index} onPress={() => navigateToDetail(detail)} style={[styles.cardStyle, index === 0 && { marginLeft: 20 }]}>
            <Image source={detail.image} style={{ width: '100%', resizeMode: 'contain', height: 100 }} />
            <Text style={{ color: hitam, fontWeight: 'bold' }}>{detail.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
    
  );
}

const styles = StyleSheet.create({
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  cardStyle: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: border,
    marginRight: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: biru,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleText: {
    flex: 1,
    marginRight: 'auto',
  },
  
});
