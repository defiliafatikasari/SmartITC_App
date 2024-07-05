import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView, Image, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FavoriteContext } from '../component/FavoriteContext';

const LihatSemuaKursus = ({ navigation }) => {
  const { favorites, addFavorite, removeFavorite, isFavorite } = useContext(FavoriteContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const courses = [
    { image: { uri: 'https://drive.google.com/uc?id=1AOXIqN3X1ZZU_X8haC4tsvI2gAsvhMaQ' }, title: "Family Institute", description: "Family Institute adalah lembaga pelatihan yang berfokus pada pengembangan keterampilan penting untuk keluarga dan individu. Kami menawarkan kursus dalam tiga bidang utama: Digital Marketing, Aplikasi Perkantoran, dan Bahasa Inggris. Kursus Digital Marketing kami dirancang untuk membantu peserta memahami strategi pemasaran online, penggunaan media sosial, dan analitik web. Kursus Aplikasi Perkantoran meliputi pelatihan dalam penggunaan software perkantoran seperti Microsoft Office dan Google Workspace, yang sangat penting untuk meningkatkan produktivitas kerja.", link: "mailto:lkp.familyinstitute@gmail.com" },
    { image: { uri: 'https://drive.google.com/uc?id=1xSEynfN-_U_CaGRpB1rWDUrVFlaT5lVV' }, title: "DBS", description: "DBS Foundation menawarkan kursus yang berfokus pada topik-topik keuangan dan bisnis, dirancang untuk membantu individu dan perusahaan mengembangkan pengetahuan dan keterampilan dalam bidang ini. Dengan materi yang mencakup manajemen keuangan pribadi, investasi, analisis pasar, hingga strategi bisnis, DBS menyediakan sumber daya pendidikan yang komprehensif. Kursus ini diajarkan oleh para ahli industri dan menggunakan studi kasus nyata untuk memberikan wawasan praktis yang dapat diterapkan langsung di dunia nyata.", link: "https://www.dbs.com" },
    { image: { uri: 'https://drive.google.com/uc?id=1jWYnUr5Hbu1l9dk1xW2L_Fn69ojJuBwp' }, title: "Mitra Informatika Indonesia", description: "Mitra Informatika Indonesia (MII) adalah penyedia kursus IT yang menawarkan program pelatihan mulai dari dasar hingga tingkat mahir. MII menyediakan kursus dalam berbagai topik IT termasuk jaringan komputer, keamanan siber, pengembangan perangkat lunak, dan manajemen basis data. Dengan fokus pada pembelajaran praktis, MII memastikan bahwa peserta dapat menguasai keterampilan teknis yang dibutuhkan untuk sukses dalam karir IT mereka. Selain itu, MII juga menyediakan layanan sertifikasi yang diakui secara internasional.", link: "https://www.mii.co.id" },
    { image: { uri: 'https://drive.google.com/uc?id=1R_YTeO9WYwkUi1UQe3iRZ8IXBGa9oG41' }, title: "Course-Net", description: "Course-Net adalah platform kursus online yang menawarkan berbagai program pelatihan untuk mengembangkan keterampilan dalam berbagai bidang. Dari teknologi informasi, desain grafis, hingga pemasaran digital, Course-Net menyediakan kursus yang dirancang oleh para profesional industri untuk memastikan relevansi dan kualitas materi. Dengan pendekatan pembelajaran yang interaktif dan berbasis proyek, Course-Net membantu peserta membangun portofolio yang kuat dan siap untuk pasar kerja. Platform ini juga menyediakan jaringan alumni dan mentor untuk mendukung pengembangan karir peserta.", link: "https://www.course-net.com" },
    { image: { uri: 'https://drive.google.com/uc?id=1qbUuycksmIuEEkUZuQ-TFyF1v6CfTWBb' }, title: "SkilAcademy", description: "SkilAcademy adalah platform kursus online yang menyediakan berbagai program pelatihan untuk meningkatkan keterampilan dalam berbagai bidang. Dari pengembangan web, data science, hingga kecerdasan buatan, SkilAcademy menawarkan kursus yang didesain oleh para ahli industri untuk memastikan kesesuaian dengan kebutuhan pasar kerja saat ini. Dengan metode pembelajaran yang fleksibel dan akses ke materi pelatihan yang berkualitas, SkilAcademy membantu peserta meraih tujuan pembelajaran mereka dengan efektif.", link: "https://skillacademy.com/" },
    { image: { uri: 'https://drive.google.com/uc?id=1jcgY4IEPdDcTGIieQz4-QeL4wKVIEkpK' }, title: "Udemy", description: "Udemy adalah salah satu platform kursus online terbesar yang menawarkan ribuan kursus dalam berbagai bidang, mulai dari pengembangan perangkat lunak, bisnis, hingga seni dan desain. Dengan pendekatan belajar mandiri dan akses ke instruktur berpengalaman di seluruh dunia, Udemy memungkinkan peserta untuk belajar sesuai dengan kecepatan mereka sendiri. Platform ini juga menyediakan kesempatan untuk berinteraksi dengan komunitas pembelajaran online dan membangun keterampilan yang relevan dengan kebutuhan industri saat ini.", link: "https://www.udemy.com/id/" },
  ];
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };
  const handleFavoritePress = (course) => {
    if (isFavorite(course)) {
      removeFavorite(course);
    } else {
      addFavorite(course);
    }
  };
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ImageBackground
      source={require('../assets/gambar/bg.jpg')}
      style={styles.container}
    >
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchButton} onPress={() => setShowSearchInput(!showSearchInput)}>
        <Icon name="search" size={24} color="white" />
      </TouchableOpacity>
      {showSearchInput && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Cari..."
            placeholderTextColor="white"
            onChangeText={setSearchQuery}
            onSubmitEditing={() => console.log('Pencarian:', searchQuery)}
            maxLength={30}
          />
        </View>
      )}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {filteredCourses.map((course, index) => (
          <TouchableOpacity key={index} style={styles.courseItem} onPress={() => openLink(course.link)}>
            <Image source={course.image} style={styles.image} resizeMode="contain" />
            <View style={styles.textContainer}>
              <Text style={styles.courseName}>{course.title}</Text>
              <Text style={styles.courseDescription}>{course.description}</Text>
            </View>
            <TouchableOpacity 
              style={styles.favoriteIcon} 
              onPress={() => handleFavoritePress(course)}
            >
              <Icon name={isFavorite(course) ? 'heart' : 'heart-o'} size={20} color="white" />
            </TouchableOpacity>
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
    position: 'relative',
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
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  courseDescription: {
    fontSize: 12,
    color: 'white',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
