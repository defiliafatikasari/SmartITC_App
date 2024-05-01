import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { hitam } from "../constants/warna";
import GmbrLogo from '../assets/gambar/LogoSitc.png';

export default function LayarTentang() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tentang Kami</Text>
      <Image source={GmbrLogo} style={styles.imglogo}/>
      <Text style={styles.subtitle}>Smart ITC</Text>
      <Text style={styles.description}>
        Smart ITC, singkatan dari Smart Information Training and Course, adalah sebuah website yang menyediakan informasi tentang pelatihan dan kursus terbaik dan berkualitas di Indonesia. Website ini bertujuan untuk membantu para
        siswa, mahasiswa, dan berbagai individu yang ingin mengembangkan kemampuan mereka melalui berbagai program pelatihan dan kursus yang tersedia. Dengan menyediakan informasi yang lengkap dan akurat, Smart ITC menjadi tempat yang
        tepat bagi mereka yang ingin meningkatkan keterampilan dan pengetahuan mereka dalam berbagai bidang.
      </Text>
      <Text style={styles.subtitle}>Visi Misi</Text>
      <Text style={styles.description}>
        Visi: Menjadi sumber informasi terkemuka untuk pelatihan dan kursus berkualitas di Indonesia, yang membantu individu dalam mengembangkan potensi mereka dan mencapai tujuan pendidikan dan karier.
      </Text>
      <Text style={styles.description}>
        Misi: Menyediakan informasi yang komprehensif tentang berbagai pelatihan dan kursus terbaik di Indonesia, meliputi deskripsi program, biaya, lokasi, dan ulasan. Mendorong aksesibilitas pendidikan dan pelatihan dengan menyediakan
        informasi tentang program beasiswa, diskon, dan bantuan keuangan. Menjalin kemitraan dengan lembaga pendidikan dan pelatihan untuk memastikan kualitas dan relevansi program yang disampaikan. Menginspirasi dan membimbing individu
        dalam pemilihan program pelatihan yang sesuai dengan minat, kebutuhan, dan tujuan mereka. Mengembangkan komunitas belajar yang aktif dan berdaya guna melalui forum diskusi, webinar, dan pertemuan offline. Berkomitmen pada
        penyediaan informasi yang akurat, objektif, dan terpercaya untuk membantu individu membuat keputusan yang cerdas dalam memilih program pelatihan.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#FFF',
  },
  imglogo: {
    alignSelf: 'center',
    width: 190, 
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: hitam,
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: hitam,
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: hitam,
    textAlign: "justify",
    marginBottom: 20,
  },
});
