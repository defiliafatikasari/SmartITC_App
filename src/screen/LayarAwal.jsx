import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { biru } from "../constants/warna";

export default function LayarAwal() {
    const navigation = useNavigation(); 

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/gambar/OnBoarding.png')} style={styles.background}>
                <Text style={styles.title}>Selamat Datang</Text>
                <Text style={styles.subtitle}>Di Smart Information Training and Courses</Text>
                <Text style={styles.description}>Informasi Pelatihan dan Kursus di Indonesia</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Tab')} style={styles.button}>
                    <Text style={styles.buttonText}>Cari Tahu Lebih Lanjut!!!</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 35,
    },
    title: {
        fontSize: 50,
        fontWeight: '800',
        color: biru,
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 30,
        fontWeight: '700',
        color: biru,
        marginBottom: 5,
    },
    description: {
        fontSize: 15,
        color: biru,
        marginBottom: 45,
    },
    button: {
        backgroundColor: biru,
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 30,
        width: '100%',
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
});
