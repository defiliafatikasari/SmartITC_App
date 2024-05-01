import React, { useEffect } from "react";
import { Image, StyleSheet, View } from 'react-native';
import { biru } from "../constants/warna";

const LayarSplash = ({navigation}) => {
    useEffect ( () => {
        setTimeout ( () => {
            navigation.replace('LayarAwal');
        }, 1500);
    });
    return (
        <View style={styles.wrapper}>
            <Image 
                source={require('../assets/gambar/LogoSitc.png')} 
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
};

export default LayarSplash;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: biru,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        margin: 6,
        width: 300, 
        height: 150,
    },
    welcomeText: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        paddingBottom: 20,
    },
});
