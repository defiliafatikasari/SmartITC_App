import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { biru, hitam } from "../constants/warna";
import IkonF from 'react-native-vector-icons/FontAwesome';

const Favorit = () => {
  const navigation = useNavigation();

  const training = [
    { id: 1, image: { uri: 'https://drive.google.com/uc?id=1IyqMR16Mtd4kBFxFPL65qWQXV9Zkppy5' }, title: "CodePolitan", description: "CodePolitan adalah platform edukasi yang menyediakan pelatihan coding untuk semua tingkat kemampuan, mulai dari pemula hingga profesional.", link: "https://www.codepolitan.com" },
    { id: 2, image: { uri: 'https://drive.google.com/uc?id=1-nd4C7lEqi2-nNGrRGV8sS0Wp5b3rZuY' }, title: "Dicoding", description: "Dicoding adalah platform belajar pemrograman terkemuka di Indonesia yang menyediakan berbagai macam materi pembelajaran untuk developer dari semua tingkatan.", link: "https://www.dicoding.com" },
    { id: 3, image: { uri: 'https://drive.google.com/uc?id=10McAo8LL-00xWZp13bSYXxyJOgknbsEU' }, title: "MySkill", description: "MySkill adalah platform pelatihan yang bertujuan untuk meningkatkan keterampilan profesional dalam berbagai bidang.", link: "https://www.myskill.id" },
    { id: 4, image: { uri: 'https://drive.google.com/uc?id=1AA7opwPYkSLlw4O9Gxg7ZwcMv34r0KPn' }, title: "SkilVul", description: "SkilVul adalah platform pelatihan online yang menyediakan berbagai kursus untuk mengembangkan keterampilan di bidang teknologi dan digital.", link: "https://www.skilvul.com" },
  ];

  const course = [
    { id: 5, image: { uri: 'https://drive.google.com/uc?id=1AOXIqN3X1ZZU_X8haC4tsvI2gAsvhMaQ' }, title: "Family Institute", description: "Family Institute adalah lembaga pelatihan yang berfokus pada pengembangan keterampilan penting untuk keluarga dan individu.", link: "mailto:lkp.familyinstitute@gmail.com" },
    { id: 6, image: { uri: 'https://drive.google.com/uc?id=1xSEynfN-_U_CaGRpB1rWDUrVFlaT5lVV' }, title: "DBS", description: "DBS Foundation menawarkan kursus yang berfokus pada topik-topik keuangan dan bisnis.", link: "https://www.dbs.com" },
    { id: 7, image: { uri: 'https://drive.google.com/uc?id=1jWYnUr5Hbu1l9dk1xW2L_Fn69ojJuBwp' }, title: "Mitra Informatika Indonesia", description: "Mitra Informatika Indonesia (MII) adalah penyedia kursus IT yang menawarkan program pelatihan mulai dari dasar hingga tingkat mahir.", link: "https://www.mii.co.id" },
    { id: 8, image: { uri: 'https://drive.google.com/uc?id=1R_YTeO9WYwkUi1UQe3iRZ8IXBGa9oG41' }, title: "Course-Net", description: "Course-Net adalah platform kursus online yang menawarkan berbagai program pelatihan untuk mengembangkan keterampilan dalam berbagai bidang.", link: "https://www.course-net.com" },
  ];

  const favoritedItems = training.slice(0, 2).concat(course.slice(0, 2));
  const navigateToDetail = (item) => {
    navigation.navigate('DetailPelsus', { detail: item });
  };
  const removeFromFavorites = (item) => {
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pelatihan Favorit</Text>
        {favoritedItems.filter(item => training.some(t => t.id === item.id)).map((item, index) => (
          <TouchableOpacity key={index} style={styles.item} onPress={() => navigateToDetail(item)}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text numberOfLines={2} style={styles.description}>{item.description}</Text>
            </View>
            <TouchableOpacity style={styles.removeButton} onPress={() => removeFromFavorites(item)}>
              <IkonF name="times" size={16} color={hitam} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kursus Favorit</Text>
        {favoritedItems.filter(item => course.some(c => c.id === item.id)).map((item, index) => (
          <TouchableOpacity key={index} style={styles.item} onPress={() => navigateToDetail(item)}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text numberOfLines={2} style={styles.description}>{item.description}</Text>
            </View>
            <TouchableOpacity style={styles.removeButton} onPress={() => removeFromFavorites(item)}>
              <IkonF name="times" size={16} color={hitam} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0', 
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: 'white', 
    borderRadius: 15, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3, 
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: hitam,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: biru,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15,
    borderRadius: 8, 
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: hitam,
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
  description: {
    color: hitam,
    fontSize: 14,
  },
  removeButton: {
    backgroundColor: 'transparent',
    borderRadius: 15,
    padding: 5,
  },
});

export default Favorit;
