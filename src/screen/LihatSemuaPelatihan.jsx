import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, TextInput, ScrollView, Image, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const LihatSemuaPelatihan = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [favoritedTrainings, setFavoritedTrainings] = useState([]);

  const handleSearchPress = () => {
    setShowSearchInput(!showSearchInput); 
    setSearchQuery(''); 
  };

  const handleInputChange = (text) => {
    setSearchQuery(text);
  };

  const handleSearchSubmit = () => {
    console.log('Pencarian: ', searchQuery);
  };

  const trainings = [
    { image: { uri: 'https://drive.google.com/uc?id=1IyqMR16Mtd4kBFxFPL65qWQXV9Zkppy5' }, title: "CodePolitan", description: "CodePolitan adalah platform edukasi yang menyediakan pelatihan coding untuk semua tingkat kemampuan, mulai dari pemula hingga profesional. Dengan kurikulum yang komprehensif dan didukung oleh instruktur berpengalaman, CodePolitan menawarkan berbagai kursus yang mencakup dasar-dasar pemrograman, pengembangan web, hingga teknologi terbaru seperti kecerdasan buatan dan pembelajaran mesin. Peserta pelatihan juga memiliki akses ke komunitas online untuk berkolaborasi dan mendapatkan bantuan dari sesama pelajar dan mentor.", link: "https://www.codepolitan.com" },
    { image: { uri: 'https://drive.google.com/uc?id=1-nd4C7lEqi2-nNGrRGV8sS0Wp5b3rZuY' }, title: "Dicoding", description: "Dicoding adalah platform belajar pemrograman terkemuka di Indonesia yang menyediakan berbagai macam materi pembelajaran untuk developer dari semua tingkatan. Dicoding menawarkan kursus dengan pendekatan praktis yang dirancang oleh para ahli industri dan diakui secara global. Dari pengembangan aplikasi Android, pengembangan web, hingga teknologi cloud, Dicoding menyediakan sertifikasi yang diakui oleh perusahaan teknologi besar. Selain itu, Dicoding juga menyediakan proyek-proyek nyata untuk membantu peserta membangun portofolio profesional.", link: "https://www.dicoding.com" },
    { image: { uri: 'https://drive.google.com/uc?id=10McAo8LL-00xWZp13bSYXxyJOgknbsEU' }, title: "MySkill", description: "MySkill adalah platform pelatihan yang bertujuan untuk meningkatkan keterampilan profesional dalam berbagai bidang. Dengan berfokus pada pengembangan keterampilan yang dibutuhkan di dunia kerja, MySkill menawarkan kursus yang meliputi soft skills seperti kepemimpinan dan komunikasi, serta hard skills seperti analisis data dan manajemen proyek. Setiap kursus dirancang dengan metode pembelajaran interaktif yang memudahkan peserta untuk memahami dan mengaplikasikan ilmu yang dipelajari dalam pekerjaan mereka sehari-hari.", link: "https://www.myskill.id" },
    { image: { uri: 'https://drive.google.com/uc?id=1AA7opwPYkSLlw4O9Gxg7ZwcMv34r0KPn' }, title: "SkilVul", description: "SkilVul adalah platform pelatihan online yang menyediakan berbagai kursus untuk mengembangkan keterampilan di bidang teknologi dan digital. Dengan fokus pada pembelajaran praktis dan proyek nyata, SkilVul menawarkan kursus dalam berbagai topik seperti desain grafis, pengembangan web, pemrograman, dan pemasaran digital. Platform ini dirancang untuk membantu peserta menjadi profesional yang siap kerja dengan keterampilan yang relevan dan up-to-date. SkilVul juga menawarkan program mentorship dan dukungan karir untuk membantu peserta mencapai tujuan profesional mereka.", link: "https://www.skilvul.com" },
    { image: { uri: 'https://drive.google.com/uc?id=1SFcZKB3FnpWgO3NEc-7-wXbVbGpHunEZ' }, title: "Yes.co.id", description: "Yes.co.id adalah platform online yang menyediakan berbagai pelatihan untuk pengembangan keterampilan di berbagai bidang. Dengan fokus pada pembelajaran praktis dan proyek nyata, Yes.co.id menawarkan pelatihan dalam berbagai topik seperti manajemen bisnis, pengembangan personal, dan keterampilan teknis. Platform ini didukung oleh instruktur yang berpengalaman dan dirancang untuk membantu peserta mencapai tujuan karir mereka.", link: "https://www.yec.co.id" },
    { image: { uri: 'https://drive.google.com/uc?id=1Uz_KuJAR7TFpslUq4S2yMtBymKA5YqRV' }, title: "Karier.mu", description: "Karier.mu adalah platform online yang menyediakan berbagai pelatihan untuk mengembangkan keterampilan di bidang karier dan profesional. Dengan fokus pada pembelajaran yang praktis dan aplikatif, Karier.mu menawarkan pelatihan dalam berbagai topik seperti manajemen sumber daya manusia, pengembangan keterampilan interpersonal, dan kewirausahaan. Platform ini dirancang untuk membantu peserta mempersiapkan diri dalam menghadapi tantangan dan persaingan di dunia kerja modern.", link: "https://www.karier.mu" },
  ];

  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('Error opening link:', err));
  };

  const handleFavoritePress = (training) => {
    if (favoritedTrainings.some(favorite => favorite.title === training.title)) {
      const updatedFavorites = favoritedTrainings.filter(favorite => favorite.title !== training.title);
      setFavoritedTrainings(updatedFavorites);
    } else {
      const updatedFavorites = [...favoritedTrainings, training];
      setFavoritedTrainings(updatedFavorites);
    }
  };

  const filteredTrainings = trainings.filter(training =>
    training.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    training.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {filteredTrainings.map((training, index) => (
          <TouchableOpacity key={index} style={styles.trainingItem} onPress={() => openLink(training.link)}>
            <Image source={training.image} style={styles.image} resizeMode="contain" />
            <View style={styles.textContainer}>
              <Text style={styles.trainingName}>{training.title}</Text>
              <Text style={styles.trainingDescription}>{training.description}</Text>
            </View>
            <TouchableOpacity style={styles.favoriteIcon} onPress={() => handleFavoritePress(training)}>
              <Icon name={favoritedTrainings.some(favorite => favorite.title === training.title) ? 'heart' : 'heart-o'} size={20} color="white" />
            </TouchableOpacity>
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
  trainingName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  trainingDescription: {
    color: 'white',
    fontSize: 14,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
