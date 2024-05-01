import React from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
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

                <Button onPress={() => navigation.navigate('Tab')} title={"Cari Tahu Lebih Lanjut !!!"} buttonStyle={styles.button}/>
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
        marginBottom: 50,
    },
    button: {
        backgroundColor: biru,
    },
});
