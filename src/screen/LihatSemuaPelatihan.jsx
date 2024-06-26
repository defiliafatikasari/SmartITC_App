import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView, Image, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; 

const LihatSemuaPelatihan = ({ navigation }) => {
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

  // Data pelatihan
  const trainings = [
    { image: { uri: 'https://drive.google.com/uc?id=1IyqMR16Mtd4kBFxFPL65qWQXV9Zkppy5' }, title: "CodePolitan", description: "CodePolitan adalah platform edukasi yang menyediakan pelatihan coding untuk semua tingkat kemampuan, mulai dari pemula hingga profesional. Dengan kurikulum yang komprehensif dan didukung oleh instruktur berpengalaman, CodePolitan menawarkan berbagai kursus yang mencakup dasar-dasar pemrograman, pengembangan web, hingga teknologi terbaru seperti kecerdasan buatan dan pembelajaran mesin. Peserta pelatihan juga memiliki akses ke komunitas online untuk berkolaborasi dan mendapatkan bantuan dari sesama pelajar dan mentor.", link: "https://www.codepolitan.com" },
    { image: { uri: 'https://drive.google.com/uc?id=1-nd4C7lEqi2-nNGrRGV8sS0Wp5b3rZuY' }, title: "Dicoding", description: "Dicoding adalah platform belajar pemrograman terkemuka di Indonesia yang menyediakan berbagai macam materi pembelajaran untuk developer dari semua tingkatan. Dicoding menawarkan kursus dengan pendekatan praktis yang dirancang oleh para ahli industri dan diakui secara global. Dari pengembangan aplikasi Android, pengembangan web, hingga teknologi cloud, Dicoding menyediakan sertifikasi yang diakui oleh perusahaan teknologi besar. Selain itu, Dicoding juga menyediakan proyek-proyek nyata untuk membantu peserta membangun portofolio profesional.", link: "https://www.dicoding.com" },
    { image: { uri: 'https://drive.google.com/uc?id=10McAo8LL-00xWZp13bSYXxyJOgknbsEU' }, title: "MySkill", description: "MySkill adalah platform pelatihan yang bertujuan untuk meningkatkan keterampilan profesional dalam berbagai bidang. Dengan berfokus pada pengembangan keterampilan yang dibutuhkan di dunia kerja, MySkill menawarkan kursus yang meliputi soft skills seperti kepemimpinan dan komunikasi, serta hard skills seperti analisis data dan manajemen proyek. Setiap kursus dirancang dengan metode pembelajaran interaktif yang memudahkan peserta untuk memahami dan mengaplikasikan ilmu yang dipelajari dalam pekerjaan mereka sehari-hari.", link: "https://www.myskill.id" },
    { image: { uri: 'https://drive.google.com/uc?id=1AA7opwPYkSLlw4O9Gxg7ZwcMv34r0KPn' }, title: "SkilVul", description: "SkilVul adalah platform pelatihan online yang menyediakan berbagai kursus untuk mengembangkan keterampilan di bidang teknologi dan digital. Dengan fokus pada pembelajaran praktis dan proyek nyata, SkilVul menawarkan kursus dalam berbagai topik seperti desain grafis, pengembangan web, pemrograman, dan pemasaran digital. Platform ini dirancang untuk membantu peserta menjadi profesional yang siap kerja dengan keterampilan yang relevan dan up-to-date. SkilVul juga menawarkan program mentorship dan dukungan karir untuk membantu peserta mencapai tujuan profesional mereka.", link: "https://www.skilvul.com" },
  ];

  // Fungsi untuk membuka link eksternal dalam browser
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
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
        {/* Fungsi Pencarian ini Belum Berfungsi Bingung Belum Paham */}
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
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {trainings.map((training, index) => (
          <TouchableOpacity key={index} style={styles.trainingItem} onPress={() => openLink(training.link)}>
            <Image source={training.image} style={styles.image} resizeMode="cover" />
            <View style={styles.textContainer}>
              <Text style={styles.trainingName}>{training.title}</Text>
              <Text style={styles.trainingDescription}>{training.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

export default LihatSemuaPelatihan;

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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
    zIndex: 1,
  },
  searchButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    zIndex: 1,
  },
  searchContainer: {
    position: 'absolute',
    top: 20,
    right: 70,
    maxWidth: 250,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
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
  contentContainer: {
    paddingTop: 80, 
    paddingHorizontal: 20,
  },
  trainingItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  trainingName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  trainingDescription: {
    color: 'white',
    fontSize: 14,
  },
});
