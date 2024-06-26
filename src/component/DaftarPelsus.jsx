import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { hitam, biru, border } from "../constants/warna";

const training = [
  { image: { uri: 'https://drive.google.com/uc?id=1IyqMR16Mtd4kBFxFPL65qWQXV9Zkppy5' }, title: "CodePolitan", description: "CodePolitan adalah platform edukasi yang menyediakan pelatihan coding untuk semua tingkat kemampuan, mulai dari pemula hingga profesional. Dengan kurikulum yang komprehensif dan didukung oleh instruktur berpengalaman, CodePolitan menawarkan berbagai kursus yang mencakup dasar-dasar pemrograman, pengembangan web, hingga teknologi terbaru seperti kecerdasan buatan dan pembelajaran mesin. Peserta pelatihan juga memiliki akses ke komunitas online untuk berkolaborasi dan mendapatkan bantuan dari sesama pelajar dan mentor.", link: "https://www.codepolitan.com" },
  { image: { uri: 'https://drive.google.com/uc?id=1-nd4C7lEqi2-nNGrRGV8sS0Wp5b3rZuY' }, title: "Dicoding", description: "Dicoding adalah platform belajar pemrograman terkemuka di Indonesia yang menyediakan berbagai macam materi pembelajaran untuk developer dari semua tingkatan. Dicoding menawarkan kursus dengan pendekatan praktis yang dirancang oleh para ahli industri dan diakui secara global. Dari pengembangan aplikasi Android, pengembangan web, hingga teknologi cloud, Dicoding menyediakan sertifikasi yang diakui oleh perusahaan teknologi besar. Selain itu, Dicoding juga menyediakan proyek-proyek nyata untuk membantu peserta membangun portofolio profesional.", link: "https://www.dicoding.com" },
  { image: { uri: 'https://drive.google.com/uc?id=10McAo8LL-00xWZp13bSYXxyJOgknbsEU' }, title: "MySkill", description: "MySkill adalah platform pelatihan yang bertujuan untuk meningkatkan keterampilan profesional dalam berbagai bidang. Dengan berfokus pada pengembangan keterampilan yang dibutuhkan di dunia kerja, MySkill menawarkan kursus yang meliputi soft skills seperti kepemimpinan dan komunikasi, serta hard skills seperti analisis data dan manajemen proyek. Setiap kursus dirancang dengan metode pembelajaran interaktif yang memudahkan peserta untuk memahami dan mengaplikasikan ilmu yang dipelajari dalam pekerjaan mereka sehari-hari.", link: "https://www.myskill.id" },
  { image: { uri: 'https://drive.google.com/uc?id=1AA7opwPYkSLlw4O9Gxg7ZwcMv34r0KPn' }, title: "SkilVul", description: "SkilVul adalah platform pelatihan online yang menyediakan berbagai kursus untuk mengembangkan keterampilan di bidang teknologi dan digital. Dengan fokus pada pembelajaran praktis dan proyek nyata, SkilVul menawarkan kursus dalam berbagai topik seperti desain grafis, pengembangan web, pemrograman, dan pemasaran digital. Platform ini dirancang untuk membantu peserta menjadi profesional yang siap kerja dengan keterampilan yang relevan dan up-to-date. SkilVul juga menawarkan program mentorship dan dukungan karir untuk membantu peserta mencapai tujuan profesional mereka.", link: "https://www.skilvul.com" },
];

const course = [
  { image: { uri: 'https://drive.google.com/uc?id=1AOXIqN3X1ZZU_X8haC4tsvI2gAsvhMaQ' }, title: "Family Institute", description: "Family Institute adalah lembaga pelatihan yang berfokus pada pengembangan keterampilan penting untuk keluarga dan individu. Kami menawarkan kursus dalam tiga bidang utama: Digital Marketing, Aplikasi Perkantoran, dan Bahasa Inggris. Kursus Digital Marketing kami dirancang untuk membantu peserta memahami strategi pemasaran online, penggunaan media sosial, dan analitik web. Kursus Aplikasi Perkantoran meliputi pelatihan dalam penggunaan software perkantoran seperti Microsoft Office dan Google Workspace, yang sangat penting untuk meningkatkan produktivitas kerja. Sementara itu, kursus Bahasa Inggris kami dirancang untuk meningkatkan keterampilan berkomunikasi dalam bahasa Inggris, baik lisan maupun tulisan, dengan materi yang disesuaikan untuk berbagai tingkat kemampuan. Setiap kursus di Family Institute didukung oleh instruktur berpengalaman dan metode pembelajaran yang interaktif, memastikan peserta mendapatkan pengalaman belajar yang menyeluruh dan aplikatif.", link: "mailto:lkp.familyinstitute@gmail.com" },
  { image: { uri: 'https://drive.google.com/uc?id=1xSEynfN-_U_CaGRpB1rWDUrVFlaT5lVV' }, title: "DBS", description: "DBS Foundation menawarkan kursus yang berfokus pada topik-topik keuangan dan bisnis, dirancang untuk membantu individu dan perusahaan mengembangkan pengetahuan dan keterampilan dalam bidang ini. Dengan materi yang mencakup manajemen keuangan pribadi, investasi, analisis pasar, hingga strategi bisnis, DBS menyediakan sumber daya pendidikan yang komprehensif. Kursus ini diajarkan oleh para ahli industri dan menggunakan studi kasus nyata untuk memberikan wawasan praktis yang dapat diterapkan langsung di dunia nyata.", link: "https://www.dbs.com" },
  { image: { uri: 'https://drive.google.com/uc?id=1jWYnUr5Hbu1l9dk1xW2L_Fn69ojJuBwp' }, title: "Mitra Informatika Indonesia", description: "Mitra Informatika Indonesia (MII) adalah penyedia kursus IT yang menawarkan program pelatihan mulai dari dasar hingga tingkat mahir. MII menyediakan kursus dalam berbagai topik IT termasuk jaringan komputer, keamanan siber, pengembangan perangkat lunak, dan manajemen basis data. Dengan fokus pada pembelajaran praktis, MII memastikan bahwa peserta dapat menguasai keterampilan teknis yang dibutuhkan untuk sukses dalam karir IT mereka. Selain itu, MII juga menyediakan layanan sertifikasi yang diakui secara internasional.", link: "https://www.mii.co.id" },
  { image: { uri: 'https://drive.google.com/uc?id=1R_YTeO9WYwkUi1UQe3iRZ8IXBGa9oG41' }, title: "Course-Net", description: "Course-Net adalah platform kursus online yang menawarkan berbagai program pelatihan untuk mengembangkan keterampilan dalam berbagai bidang. Dari teknologi informasi, desain grafis, hingga pemasaran digital, Course-Net menyediakan kursus yang dirancang oleh para profesional industri untuk memastikan relevansi dan kualitas materi. Dengan pendekatan pembelajaran yang interaktif dan berbasis proyek, Course-Net membantu peserta membangun portofolio yang kuat dan siap untuk pasar kerja. Platform ini juga menyediakan jaringan alumni dan mentor untuk mendukung pengembangan karir peserta.", link: "https://www.course-net.com" },
];

export default function DaftarPelsus({ title, navigation }) {
  const data = title === 'Training (Pelatihan)' ? training : course;
  const navigateToDetail = (detail) => {
    navigation.navigate('DetailPelsus', { detail });
  }
  const navigateToSeeAll = () => {
    const screenName = title === 'Training (Pelatihan)' ? 'LihatSemuaPelatihan' : 'LihatSemuaKursus';
    navigation.navigate(screenName, { data }); 
  }

  return (
    <>
      <View style={[styles.flexRowCenter, { justifyContent: 'space-between', paddingHorizontal: 24 }]}>
        <Text style={[{ color: hitam, fontSize: 24, fontWeight: '800' }, styles.titleText]}>{title}</Text>
        <TouchableOpacity onPress={navigateToSeeAll}>
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
