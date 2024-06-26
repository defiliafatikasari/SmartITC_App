import React from "react";
import { Text, ScrollView, StyleSheet, TouchableOpacity, Image, Linking, View } from "react-native";
import { hitam, biru } from "../constants/warna";

const blogs = [
  { id: 1, title: "Ringkasan Seputar Dunia IT", date: "July 2023", link: "https://itinshights.blogspot.com/2023/07/ringkasan-dunia-it-body-font-family.html", image: require('../assets/gambar/people.png') },
  { id: 2, title: "Jurusan-Jurusan Di Bidang IT", date: "July 2023", link: "https://itinshights.blogspot.com/2023/07/jurusan-jurusan-di-bidang-it.html", image: require('../assets/gambar/suitcase.png') },
  { id: 3, title: "Meniti Sukses di Dunia IT: Pentingnya Mendapatkan Sertifikasi bagi Programmer", date: "January 2024", link: "https://itinshights.blogspot.com/2024/01/kenapa-pentingnya-mendapatkan.html", image: require('../assets/gambar/trophy.png') },
];

export default function LayarBlog() {
  const openBlogLink = (link) => {
    Linking.openURL(link);
  };
  const openMainBlogLink = () => {
    Linking.openURL("https://itinshights.blogspot.com/");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Blogs Smart ITC</Text>
        <Text style={styles.subtitle}>by Seputar Dunia IT</Text>
      </View>
      <Image
        source={require('../assets/gambar/BannerBlogs.png')}
        style={styles.banner}
      />

      {blogs.map((blog) => (
        <TouchableOpacity key={blog.id} style={styles.blogItem}>
          <Image source={blog.image} style={styles.blogImage} resizeMode='contain' />
          <Text style={styles.blogTitle}>{blog.title}</Text>
          <Text style={styles.blogMeta}>{blog.date}</Text>
          <TouchableOpacity onPress={() => openBlogLink(blog.link)} style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>Baca Selengkapnya</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}

      <TouchableOpacity onPress={openMainBlogLink} style={styles.mainBlogButton}>
        <Text style={styles.mainBlogButtonText}>Akses Semua Blog</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  banner: {
    width: "100%",
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: hitam,
    letterSpacing: 1,
    marginBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: biru,
    paddingBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: hitam,
    fontStyle: 'italic',
    marginBottom: 10,
    textAlign: 'center',
  },
  blogItem: {
    width: "100%",
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: biru,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  blogImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: hitam,
    marginBottom: 5,
  },
  blogMeta: {
    fontSize: 14,
    color: hitam,
  },
  readMoreButton: {
    backgroundColor: biru,
    padding: 10,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  readMoreText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  mainBlogButton: {
    backgroundColor: biru,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 30,
    alignItems: "center",
    width: "100%",
  },
  mainBlogButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});
