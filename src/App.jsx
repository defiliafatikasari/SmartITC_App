/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IkonM from 'react-native-vector-icons/MaterialIcons';
import IkonF from 'react-native-vector-icons/FontAwesome5';


import LayarSplash from './screen/LayarSplash';
import LayarAwal from './screen/LayarAwal';
import LayarBeranda from './screen/LayarBeranda';
import LayarTentang from './screen/LayarTentang';
import { biru, hitam } from './constants/warna';
import LayarBlog from './screen/LayarBlog';
import LayarKontak from './screen/LayarKontak';
import DetailPelsus from './screen/DetailPelsus';
import LihatSemua from './screen/LihatSemua';
import Favorit from './screen/Favorit';
// Pelsus (Pelatihan Kursus)

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MenuBawah = () => {
  return (
    <Tabs.Navigator 
      screenOptions={{
        tabBarActiveTintColor: biru,
        tabBarInactiveTintColor: hitam,
      }}
    >
      <Tabs.Screen 
        name='LayarBeranda' 
        component={LayarBeranda} 
        options={{ 
          headerShown: false,
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color, focused }) => (
            <IkonM 
              name="home" 
              color={focused ? biru : hitam} 
              size={26} 
            />
          )
        }}
      />
      <Tabs.Screen 
        name='LayarTentang' 
        component={LayarTentang} 
        options={{ 
          headerShown: false,
          tabBarLabel: 'Tentang',
          tabBarIcon: ({ color, focused }) => (
            <IkonF 
              name="exclamation-circle" 
              color={focused ? biru : hitam} 
              size={20} 
            />
          )
        }}
      />
      <Tabs.Screen 
        name='Favorit' 
        component={Favorit} 
        options={{ 
          headerShown: false,
          tabBarLabel: 'Favorit',
          tabBarIcon: ({ color, focused }) => (
            <IkonM 
              name="favorite" 
              color={focused ? biru : hitam} 
              size={20} 
            />
          )
        }}
      />
      <Tabs.Screen 
        name='LayarBlog' 
        component={LayarBlog} 
        options={{ 
          headerShown: false,
          tabBarLabel: 'Blog',
          tabBarIcon: ({ color, focused }) => (
            <IkonF 
              name="blog" 
              color={focused ? biru : hitam} 
              size={20} 
            />
          )
        }}
      />
      <Tabs.Screen 
        name='LayarKontak' 
        component={LayarKontak} 
        options={{ 
          headerShown: false,
          tabBarLabel: 'Kontak',
          tabBarIcon: ({ color, focused }) => (
            <IkonF 
              name="phone-square-alt" 
              color={focused ? biru : hitam} 
              size={20} 
            />
          )
        }}
      />
    </Tabs.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='LayarSplash' component={LayarSplash} options={{headerShown: false}} />
        <Stack.Screen name='LayarAwal' component={LayarAwal} options={{headerShown: false}}/>
        <Stack.Screen name='Tab' component={MenuBawah} options={{headerShown: false}}/>
        <Stack.Screen name='DetailPelsus' component={DetailPelsus} options={{headerShown: false}}/>
        <Stack.Screen name='LihatSemua' component={LihatSemua} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;