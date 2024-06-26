import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { hitam, biru, border } from "../constants/warna";
import { Cn, Dbs, Dicoding, LogoCodePolitan, LogoFi, LogoMyskill, LogoSkilvull, Mii } from "../constants/gambar"; 
import IkonM from "react-native-vector-icons/MaterialIcons";
import LihatSemua from "../screen/LihatSemua";

const training = [
  { image: LogoCodePolitan, title: "CodePolitan", description: "Pelatihan coding untuk pemula hingga profesional.", link: "https://www.codepolitan.com" },
  { image: Dicoding, title: "Dicoding", description: "Platform belajar pemrograman dengan berbagai macam materi.", link: "https://www.dicoding.com" },
  { image: LogoMyskill, title: "MySkill", description: "Pelatihan untuk meningkatkan keterampilan profesional.", link: "https://www.myskill.id" },
  { image: LogoSkilvull, title: "SkilVul", description: "Platform pelatihan online untuk berbagai keterampilan.", link: "https://www.skilvul.com" },
];

const course = [
  { image: LogoFi, title: "Family Institute", description: "Pelatihan untuk pengembangan keluarga.", link: "https://www.familyinstitute.com" },
  { image: Dbs, title: "DBS", description: "Kursus untuk berbagai topik keuangan dan bisnis.", link: "https://www.dbs.com" },
  { image: Mii, title: "Mitra Informatika Indonesia", description: "Kursus IT dari dasar hingga mahir.", link: "https://www.mii.co.id" },
  { image: Cn, title: "Course-Net", description: "Kursus online untuk berbagai keterampilan.", link: "https://www.course-net.com" },
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
