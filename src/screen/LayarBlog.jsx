import React from "react";
import { Text, ScrollView, StyleSheet, TouchableOpacity, Image, Linking } from "react-native";
import { hitam, biru } from "../constants/warna";

const blogs = [
  { id: 1, title: "5 Tips for Effective Time Management", author: "John Doe", date: "April 15, 2024", image: require('../assets/gambar/trophy.png'), link: "https://itinshights.blogspot.com/" },
  { id: 2, title: "The Importance of Lifelong Learning", author: "Jane Smith", date: "May 3, 2024", image: require('../assets/gambar/suitcase.png'), link: "https://itinshights.blogspot.com/" },
  { id: 3, title: "How to Improve Your Problem-Solving Skills", author: "Alex Johnson", date: "June 12, 2024", image: require('../assets/gambar/people.png'), link: "https://itinshights.blogspot.com/" },
];

export default function LayarBlog({ navigation }) {
  const navigateToBlogDetail = (blog) => {
    navigation.navigate("DetailBlog", { blog });
  };

  const openBlogLink = (link) => {
    Linking.openURL(link);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Blogs Smart ITC</Text>
      <Image
        source={require('../assets/gambar/BannerBlogs.png')}
        style={styles.banner}
      />

      {blogs.map((blog) => (
        <TouchableOpacity key={blog.id} onPress={() => navigateToBlogDetail(blog)} style={styles.blogItem}>
          <Image source={blog.image} style={styles.blogImage} resizeMode='contain' />
          <Text style={styles.blogTitle}>{blog.title}</Text>
          <Text style={styles.blogMeta}>
            By {blog.author} | {blog.date}
          </Text>
          <TouchableOpacity onPress={() => openBlogLink(blog.link)} style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>Baca Selengkapnya</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
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
  banner: {
    width: "100%",
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: hitam,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
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
});
