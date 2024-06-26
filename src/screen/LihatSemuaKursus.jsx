import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView, Image, Linking } from 'react-native';
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

  // Data kursus
  const courses = [
    { image: { uri: 'https://drive.google.com/uc?id=1AOXIqN3X1ZZU_X8haC4tsvI2gAsvhMaQ' }, title: "Family Institute", description: "Family Institute adalah lembaga pelatihan yang berfokus pada pengembangan keterampilan penting untuk keluarga dan individu. Kami menawarkan kursus dalam tiga bidang utama: Digital Marketing, Aplikasi Perkantoran, dan Bahasa Inggris. Kursus Digital Marketing kami dirancang untuk membantu peserta memahami strategi pemasaran online, penggunaan media sosial, dan analitik web. Kursus Aplikasi Perkantoran meliputi pelatihan dalam penggunaan software perkantoran seperti Microsoft Office dan Google Workspace, yang sangat penting untuk meningkatkan produktivitas kerja. Sementara itu, kursus Bahasa Inggris kami dirancang untuk meningkatkan keterampilan berkomunikasi dalam bahasa Inggris, baik lisan maupun tulisan, dengan materi yang disesuaikan untuk berbagai tingkat kemampuan. Setiap kursus di Family Institute didukung oleh instruktur berpengalaman dan metode pembelajaran yang interaktif, memastikan peserta mendapatkan pengalaman belajar yang menyeluruh dan aplikatif.", link: "mailto:lkp.familyinstitute@gmail.com" },
    { image: { uri: 'https://drive.google.com/uc?id=1xSEynfN-_U_CaGRpB1rWDUrVFlaT5lVV' }, title: "DBS", description: "DBS Foundation menawarkan kursus yang berfokus pada topik-topik keuangan dan bisnis, dirancang untuk membantu individu dan perusahaan mengembangkan pengetahuan dan keterampilan dalam bidang ini. Dengan materi yang mencakup manajemen keuangan pribadi, investasi, analisis pasar, hingga strategi bisnis, DBS menyediakan sumber daya pendidikan yang komprehensif. Kursus ini diajarkan oleh para ahli industri dan menggunakan studi kasus nyata untuk memberikan wawasan praktis yang dapat diterapkan langsung di dunia nyata.", link: "https://www.dbs.com" },
    { image: { uri: 'https://drive.google.com/uc?id=1jWYnUr5Hbu1l9dk1xW2L_Fn69ojJuBwp' }, title: "Mitra Informatika Indonesia", description: "Mitra Informatika Indonesia (MII) adalah penyedia kursus IT yang menawarkan program pelatihan mulai dari dasar hingga tingkat mahir. MII menyediakan kursus dalam berbagai topik IT termasuk jaringan komputer, keamanan siber, pengembangan perangkat lunak, dan manajemen basis data. Dengan fokus pada pembelajaran praktis, MII memastikan bahwa peserta dapat menguasai keterampilan teknis yang dibutuhkan untuk sukses dalam karir IT mereka. Selain itu, MII juga menyediakan layanan sertifikasi yang diakui secara internasional.", link: "https://www.mii.co.id" },
    { image: { uri: 'https://drive.google.com/uc?id=1R_YTeO9WYwkUi1UQe3iRZ8IXBGa9oG41' }, title: "Course-Net", description: "Course-Net adalah platform kursus online yang menawarkan berbagai program pelatihan untuk mengembangkan keterampilan dalam berbagai bidang. Dari teknologi informasi, desain grafis, hingga pemasaran digital, Course-Net menyediakan kursus yang dirancang oleh para profesional industri untuk memastikan relevansi dan kualitas materi. Dengan pendekatan pembelajaran yang interaktif dan berbasis proyek, Course-Net membantu peserta membangun portofolio yang kuat dan siap untuk pasar kerja. Platform ini juga menyediakan jaringan alumni dan mentor untuk mendukung pengembangan karir peserta.", link: "https://www.course-net.com" },
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
        {courses.map((course, index) => (
          <TouchableOpacity key={index} style={styles.courseItem} onPress={() => openLink(course.link)}>
            <Image source={course.image} style={styles.image} resizeMode="cover" />
            <View style={styles.textContainer}>
              <Text style={styles.courseName}>{course.title}</Text>
              <Text style={styles.courseDescription}>{course.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  courseItem: {
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
  courseName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseDescription: {
    color: 'white',
    fontSize: 14,
  },
});
