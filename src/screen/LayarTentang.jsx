import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import { biru, hitam } from "../constants/warna";
import GmbrLogo from '../assets/gambar/LogoSitc.png';

import MediaPartner1 from '../assets/gambar/LogoUIMPamekasan.png';
import MediaPartner2 from '../assets/gambar/dicoding-logo.png';
import MediaPartner3 from '../assets/gambar/DBSFoundation.jpg';

const mediaPartners = [
  { name: "Universitas Islam Madura", link: "https://www.uim.ac.id/" },
  { name: "Dicoding", link: "https://www.dicoding.com/" },
  { name: "DBS Foundation", link: "https://www.dbs.com/dbsfoundation/" },
];

export default function LayarTentang() {
  const openMediaPartnerLink = (link) => {
    Linking.openURL(link);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Tentang Kami</Text>
        <Image source={GmbrLogo} style={styles.imgLogo} />
        <Text style={styles.subtitle}>Smart ITC</Text>
        <Text style={styles.description}>
          Smart ITC, singkatan dari Smart Information Training and Course, adalah sebuah website yang menyediakan informasi tentang pelatihan dan kursus terbaik dan berkualitas di Indonesia. Website ini bertujuan untuk membantu para siswa, mahasiswa, dan berbagai individu yang ingin mengembangkan kemampuan mereka melalui berbagai program pelatihan dan kursus yang tersedia. Dengan menyediakan informasi yang lengkap dan akurat, Smart ITC menjadi tempat yang tepat bagi mereka yang ingin meningkatkan keterampilan dan pengetahuan mereka dalam berbagai bidang.
        </Text>
        <Text style={styles.subtitle}>Visi Misi</Text>
        <View style={styles.box}>
          <Text style={styles.description}>
            <Text style={styles.point}>Visi:</Text>
          </Text>
          <Text style={styles.description}>
            <Text style={styles.point}>1.</Text> Menjadi sumber informasi terkemuka untuk pelatihan dan kursus berkualitas di Indonesia, yang membantu individu dalam mengembangkan potensi mereka dan mencapai tujuan pendidikan dan karier.
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.description}>
            <Text style={styles.point}>Misi:</Text>
          </Text>
          <Text style={styles.description}>
            <Text style={styles.point}>1.</Text> Menyediakan informasi yang komprehensif tentang berbagai pelatihan dan kursus terbaik di Indonesia, meliputi deskripsi program, biaya, lokasi, dan ulasan.
          </Text>
          <Text style={styles.description}>
            <Text style={styles.point}>2.</Text> Mendorong aksesibilitas pendidikan dan pelatihan dengan menyediakan informasi tentang program beasiswa, diskon, dan bantuan keuangan.
          </Text>
          <Text style={styles.description}>
            <Text style={styles.point}>3.</Text> Menjalin kemitraan dengan lembaga pendidikan dan pelatihan untuk memastikan kualitas dan relevansi program yang disampaikan.
          </Text>
          <Text style={styles.description}>
            <Text style={styles.point}>4.</Text> Menginspirasi dan membimbing individu dalam pemilihan program pelatihan yang sesuai dengan minat, kebutuhan, dan tujuan mereka.
          </Text>
          <Text style={styles.description}>
            <Text style={styles.point}>5.</Text> Mengembangkan komunitas belajar yang aktif dan berdaya guna melalui forum diskusi, webinar, dan pertemuan offline, serta berkomitmen pada penyediaan informasi yang akurat, objektif, dan terpercaya untuk membantu individu membuat keputusan yang cerdas dalam memilih program pelatihan.
          </Text>
        </View>
        <View style={styles.mediaPartnerContainer}>
          <Text style={styles.mediaPartnerTitle}>Media Partner</Text>
          <View style={styles.mediaPartnerRow}>
            {mediaPartners.map((partner, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => openMediaPartnerLink(partner.link)}
              >
                <Image
                  source={index === 0 ? MediaPartner1 : index === 1 ? MediaPartner2 : MediaPartner3}
                  style={styles.mediaPartnerImage}
                />
              </TouchableOpacity>
            
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  imgLogo: {
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
    fontSize: 24,
    fontWeight: "bold",
    color: hitam,
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: hitam,
    textAlign: "justify",
    marginBottom: 10,
  },
  point: {
    fontWeight: "bold",
    color: hitam,
    marginRight: 5,
  },
  box: {
    borderWidth: 1,
    borderColor: hitam,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    shadowColor: biru,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mediaPartnerContainer: {
    marginTop: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: hitam,
  },
  mediaPartnerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: hitam,
    textAlign: 'center',
  },
  mediaPartnerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  mediaPartnerImage: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
});
