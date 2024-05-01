import React from "react";
import { Text, ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";
import { hitam, biru } from "../constants/warna";

const blogs = [
  { id: 1, title: "5 Tips for Effective Time Management", author: "John Doe", date: "April 15, 2024" },
  { id: 2, title: "The Importance of Lifelong Learning", author: "Jane Smith", date: "May 3, 2024" },
  { id: 3, title: "How to Improve Your Problem-Solving Skills", author: "Alex Johnson", date: "June 12, 2024" },
];

export default function LayarBlog({ navigation }) {
  const navigateToBlogDetail = (blog) => {
    navigation.navigate("DetailBlog", { blog });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/gambar/BannerBlogs.png')}
        style={styles.banner}
      />

      <Text style={styles.title}>Blogs Smart ITC</Text>
      {blogs.map((blog) => (
        <TouchableOpacity key={blog.id} onPress={() => navigateToBlogDetail(blog)} style={styles.blogItem}>
          <Text style={styles.blogTitle}>{blog.title}</Text>
          <Text style={styles.blogMeta}>
            By {blog.author} | {blog.date}
          </Text>
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
  },
  blogItem: {
    width: "100%",
    backgroundColor: biru,
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
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
});
